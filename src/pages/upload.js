import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient"; // Make sure you have this set up correctly

function Home() {
    const navigate = useNavigate();
    const [uploadStatus, setUploadStatus] = useState("");

    // Handle file upload
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];

        if (!file) {
            alert("Please select a file!");
            return;
        }

        setUploadStatus("Uploading...");

        try {
            // Upload file to Supabase Storage
            const { data, error } = await supabase.storage
                .from("pdf-uploads")  // Replace with your Supabase bucket name
                .upload(`uploads/${file.name}`, file, {
                    cacheControl: "3600", // Optional cache control
                    upsert: false, // Optional: set to false to avoid overwriting files
                });

            if (error) {
                throw new Error(error.message);
            }

            console.log("File uploaded successfully:", data);
            setUploadStatus("File uploaded successfully!");

            // Redirect to the visualization page
            navigate("/visualization");

        } catch (error) {
            console.error("Upload failed:", error);
            setUploadStatus(`Upload failed: ${error.message}`);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>MedCo</h1>
            <div style={styles.uploadSection}>
                <label htmlFor="pdfUpload" style={styles.uploadLabel}>
                    Upload Your PDF
                </label>
                <input
                    type="file"
                    id="pdfUpload"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    style={styles.uploadInput}
                />
            </div>
            {uploadStatus && <p>{uploadStatus}</p>}
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
        backgroundColor: "#e0f7f7", // Background color matching your design
    },
    title: {
        fontSize: "2rem",
        color: "#008080", // Teal color for the title
        marginBottom: "20px",
    },
    uploadSection: {
        textAlign: "center",
    },
    uploadLabel: {
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#008080",
        color: "white",
        fontSize: "16px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    uploadInput: {
        display: "none", // Hide the default file input
    },
};

export default Home;
