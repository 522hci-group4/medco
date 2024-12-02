import React from "react";
import { useLocation } from "react-router-dom";

function Visualization() {
    const location = useLocation();
    const { fileName, extractedContent } = location.state || {};

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Visualization Page</h1>
            <p style={styles.description}>
                File Name: <strong>{fileName || "No file uploaded"}</strong>
            </p>

            {extractedContent ? (
                <div style={styles.contentSection}>
                    <h2 style={styles.subtitle}>Extracted Content</h2>
                    <pre style={styles.text}>{extractedContent}</pre>
                </div>
            ) : (
                <p style={styles.description}>No content to display.</p>
            )}
        </div>
    );
}

// Inline Styles
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        overflow: "auto",
    },
    title: {
        fontSize: "2rem",
        color: "#008080",
        marginBottom: "20px",
    },
    description: {
        fontSize: "1rem",
        color: "#555",
        marginBottom: "20px",
    },
    contentSection: {
        width: "80%",
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "#ffffff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    subtitle: {
        fontSize: "1.5rem",
        color: "#333",
        marginBottom: "10px",
    },
    text: {
        fontSize: "0.9rem",
        color: "#444",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
    },
};

export default Visualization;
