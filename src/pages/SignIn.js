import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient"; // Import Supabase client

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Handle sign-in
    const handleSignIn = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Clear previous error

        try {
            // Attempt to sign in the user
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error; // Throw error if any

            // Sign-in was successful
            console.log("User signed in:", data.user);

            // Optionally store the user session or user details if needed
            localStorage.setItem("user", JSON.stringify(data.user));

            // Redirect to Home page after successful sign-in
            navigate("/upload");
        } catch (error) {
            setErrorMessage(error.message); // Show error message if sign-in fails
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Sign In</h1>
            <form onSubmit={handleSignIn} style={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Sign In
                </button>
            </form>
            {errorMessage && <p style={styles.error}>{errorMessage}</p>}
        </div>
    );
}

// Inline Styles
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Align content to the top
        height: "100vh",
        backgroundColor: "#e0f7f7",
        paddingTop: "30px", // Add space at the top of the page
    },
    title: {
        fontSize: "2rem",
        color: "#008080",
        marginBottom: "10px", // Reduced margin to shorten the gap
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "300px",
        marginTop: "20px", // Reduced margin to bring the form closer
    },
    input: {
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px",
        backgroundColor: "#008080",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    error: {
        color: "red",
        marginTop: "10px",
    },
};

export default SignIn;
