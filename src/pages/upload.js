import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

function Upload() {
    const navigate = useNavigate();
    const [uploadStatus, setUploadStatus] = useState("");

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];

        if (!file) {
            alert("Please select a file!");
            return;
        }

        setUploadStatus("Uploading...");

        try {
            const filePath = `uploads/${file.name}`;

            // Upload the file to Supabase Storage
            const { error: uploadError } = await supabase.storage
                .from("pdf-uploads")
                .upload(filePath, file);

            if (uploadError) {
                throw new Error(uploadError.message);
            }

            setUploadStatus("File uploaded successfully!");

            // Navigate to the Visualization page with the file name
            navigate("/visualization", {
                state: { fileName: file.name },
            });
        } catch (error) {
            console.error("Upload failed:", error.message);
            setUploadStatus(`Upload failed: ${error.message}`);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Upload PDF</h1>
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
            {uploadStatus && <p style={styles.status}>{uploadStatus}</p>}
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
        backgroundColor: "#e0f7f7",
        padding: "20px",
    },
    title: {
        fontSize: "2rem",
        color: "#008080",
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
        display: "none",
    },
    status: {
        marginTop: "15px",
        fontSize: "1rem",
        color: "#333",
    },
};

export default Upload;
