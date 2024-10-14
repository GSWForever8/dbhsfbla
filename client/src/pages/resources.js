import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileTree = ({ files }) => {
    const [openFolders, setOpenFolders] = useState({});

    const toggleFolder = (id) => {
        setOpenFolders((prev) => ({
            ...prev,
            [id]: !prev[id], 
        }));
    };

    return (
        <ul>
            {files.map((file) => (
                <li key={file.id}>
                    {file.mimeType === 'application/vnd.google-apps.folder' ? (
                        <>
                            <span onClick={() => toggleFolder(file.id)}>
                                📁 {file.name}
                            </span>
                            {openFolders[file.id] && file.subFiles && (
                                <FileTree files={file.subFiles} />
                            )}
                        </>
                    ) : (
                        <a href={file.webViewLink} target="_blank" rel="noopener noreferrer">
                            📄 {file.name}
                        </a>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default function Resources() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [auth, setAuth] = useState(true);
    // Define the API URL
    const API_URL = 'https://dbhsfbla-resource.onrender.com'; // Replace with your backend URL

    const authenticateUser = () => {
        window.location.href = `${API_URL}/auth/google`;
    };

    const fetchFiles = async () => {
      setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/files`, { withCredentials: true });
            setFiles(response.data);
            setLoading(false);
        } catch (err) {
            setAuth(false);
            setLoading(false);
            // If unauthorized, redirect to authenticate
            if (err.response && err.response.status === 401) {
                setError("You must be authenticated to access these files. Make sure you disabled the feature to prevent cross site scripting. ")
                authenticateUser();
            } else {
                setError('Error fetching files');
            }
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <div className="contentwrap">
            <h1>Resources</h1>
            {error && <p>{error}</p>}
            {loading && <p>Loading files, please wait</p>}
            <FileTree files={files} />
        </div>
    );
}
