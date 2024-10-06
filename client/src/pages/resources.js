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
    const [error, setError] = useState(null);

    // Define the API URL
    const API_URL = 'http://localhost:3001'; // Replace with your backend URL

    const authenticateUser = () => {
        window.location.href = `${API_URL}/auth/google`;
    };

    const fetchFiles = async () => {
        try {
            const response = await axios.get(`${API_URL}/files`, { withCredentials: true });
            setFiles(response.data);
        } catch (err) {
            // If unauthorized, redirect to authenticate
            if (err.response && err.response.status === 401) {
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
            <FileTree files={files} />
        </div>
    );
}
