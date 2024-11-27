import React from "react";
import { useNavigate } from "react-router-dom";
import bg from '../assets/bg1.png';

function Home() {
    const navigate = useNavigate();

    // Handle navigation to Sign In and Register pages
    const handleSignIn = () => {
        navigate("/signin");
    };

    const handleRegister = () => {
        navigate("/register");
    };

    return (
        <div style={styles.container}>
            {/* Left Section: MedCo with Background Image */}
            <div style={styles.leftSection}>
                {/* Blurred Background */}
                <div style={{ ...styles.background, backgroundImage: `url(${bg})` }}></div>
                {/* MedCo Text */}
                <h1 style={styles.title}>MedCo</h1>
            </div>

            {/* Vertical Divider */}
            <div style={styles.divider}></div>

            {/* Right Section: Buttons */}
            <div style={styles.rightSection}>
                <h2 style={styles.subtitle}>Welcome</h2>
                <p style={styles.description}>Please Sign In or Register to continue.</p>
                <div style={styles.buttonsContainer}>
                    <button onClick={handleSignIn} style={styles.button}>
                        Login
                    </button>
                    <button onClick={handleRegister} style={{ ...styles.button, ...styles.registerButton }}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

// Inline Styles
const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#e0f7f7",
    },
    leftSection: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "blur(7px)", // Apply blur effect only to the background
        zIndex: 0,
    },
    title: {
        fontSize: "9rem",
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        color: "teal",
        zIndex: 1, // Ensure the text appears above the blurred background
    },
    divider: {
        width: "2px",
        backgroundColor: "#ccc",
        height: "80%",
        alignSelf: "center",
    },
    rightSection: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px",
    },
    subtitle: {
        fontSize: "2rem",
        color: "#008080",
        marginBottom: "10px",
    },
    description: {
        fontSize: "1rem",
        color: "#555",
        marginBottom: "20px",
        textAlign: "center",
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "column", // Ensure buttons are stacked vertically
        width: "100%",
        maxWidth: "300px",
        padding: 0, // Ensure no padding around the container
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#008080",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: 15, // Remove margin between buttons
    },
};

export default Home;
