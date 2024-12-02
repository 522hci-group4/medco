import React from "react";
import { useLocation } from "react-router-dom";

function Visualization() {
    const location = useLocation();
    const { fileName } = location.state || {};

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Visualization Page</h1>
            <p style={styles.description}>
                File Name: <strong>{fileName || "No file uploaded"}</strong>
            </p>
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
    },
    title: {
        fontSize: "2rem",
        color: "#008080",
        marginBottom: "20px",
    },
    description: {
        fontSize: "1rem",
        color: "#555",
    },
};

export default Visualization;
