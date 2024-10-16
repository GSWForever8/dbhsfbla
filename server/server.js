const express = require('express');
const session = require('express-session'); 
const { google } = require('googleapis');
const cors = require('cors');
const MongoStore = require('connect-mongo'); // Import connect-mongo
require('dotenv').config();
const crypto = require('crypto'); 
const mongoose = require('mongoose'); // Import mongoose
const app = express();

app.set('trust proxy', true)

const FOLDER_ID = process.env.FOLDER_ID;
const sessionSecret = process.env.SESSION_SECRET;
const mongoURI = process.env.MONGO_URI; // MongoDB URI from your environment variables

// CORS configuration
const corsOptions = {
    origin: 'https://dbhsfbla.onrender.com', 
    credentials: true,
};


// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    
// Set up session store with MongoDB
app.use(cors(corsOptions));
app.use(session({
    secret: sessionSecret, 
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
        mongoUrl: mongoURI, 
        dbName: 'cookies',
        collectionName: 'sessions', 
        ttl: 14 * 24 * 60 * 60, }) ,
    cookie: {
        secure: true,
        httpOnly: true,
        sameSite: 'None',
        maxAge: 14 * 24 * 60 * 60 * 1000
    },
}));


app.use(express.json());
const PORT = process.env.PORT || 3001;

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

// Redirect to Google for authentication
app.get('/auth/google', (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        prompt: 'consent', 
        scope: ['https://www.googleapis.com/auth/drive.readonly'],
    });
    res.redirect(authUrl);
});

// Callback route after user grants permissions
app.get('/auth/google/callback', async (req, res) => {
    const { code } = req.query;
    console.log("Authorized");
    try {
        console.log("Getting tokens");
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        req.session.tokens = tokens; // Store tokens in session
        console.log("Tokens received:", tokens);
        console.log("Tokens received:", req.session.tokens);
        console.log("redirecting");
        req.session.save((err)=>{
            if(err){
                console.error("Error saving session:",err);
            }else{
                console.log("req.session saved successfully");
            }
        });
        console.log("Session ID before send:",req.sessionID);
        console.log("req before send",req.session);
        res.redirect('https://dbhsfbla.onrender.com/compevents/resources'); 
    } catch (error) {
        console.error('Error during authentication', error);
        res.status(500).send('Authentication error');
    }
});

// Middleware to check if user is authenticated
const isAuthenticated = async (req, res, next) => {
    console.log("Session ID after send:",req.sessionID);
    console.log('session Data:', req.session);

    // Check if the session already has tokens
    if (!req.session.tokens) {
        console.log("Not authenticated");
        return res.status(401).send('User not authenticated');
    }

    // Set OAuth2 client credentials if tokens exist
    oauth2Client.setCredentials(req.session.tokens);
    next(); // Proceed to the next middleware or route handler
};


app.get('/files', isAuthenticated, async (req, res) => {
    try {
        const drive = google.drive({ version: 'v3', auth: oauth2Client });

        // Always use the predefined folder ID
        const response = await drive.files.list({
            q: `'${FOLDER_ID}' in parents`,
            fields: 'files(id, name, mimeType, webViewLink)',
        });

        const files = response.data.files;
        const results = [];

        for (const file of files) {
            // If the file is a folder, fetch its contents recursively
            if (file.mimeType === 'application/vnd.google-apps.folder') {
                const subFiles = await fetchFilesInFolder(drive, file.id);
                results.push({ ...file, subFiles });
            } else {
                results.push(file);
            }
        }

        res.json(results);
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).send('Error fetching files');
    }
});

const fetchFilesInFolder = async (drive, folderId) => {
    const response = await drive.files.list({
        q: `'${folderId}' in parents`,
        fields: 'files(id, name, mimeType, webViewLink)',
    });

    const files = response.data.files;
    const results = [];

    for (const file of files) {
        // If the file is a folder, fetch its contents recursively
        if (file.mimeType === 'application/vnd.google-apps.folder') {
            const subFiles = await fetchFilesInFolder(drive, file.id);
            results.push({ ...file, subFiles });
        } else {
            results.push(file);
        }
    }

    return results;
};

// Optional: Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).send('Could not log out.');
        }
        res.clearCookie('connect.sid', { path: '/' });
        res.redirect('https://dbhsfbla.onrender.com'); // Redirect to frontend's home page
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
