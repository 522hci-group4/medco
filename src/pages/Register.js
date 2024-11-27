import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient"; // Import Supabase client

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Handle sign-up
    const handleSignUp = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Clear previous error

        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) throw error;

            console.log("User registered:", user);
            navigate("/signin"); // Redirect to SignIn after successful registration
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Register</h1>
            <form onSubmit={handleSignUp} style={styles.form}>
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
                    Register
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

export default Register;
