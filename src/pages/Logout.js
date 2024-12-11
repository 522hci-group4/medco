import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    const [loggingOut, setLoggingOut] = useState(true);

    useEffect(() => {
        // Clear user session data (like tokens, user info, etc.)
        localStorage.removeItem('authToken'); // Remove token from localStorage
        localStorage.removeItem('userInfo'); // Remove user info
        sessionStorage.clear(); // Clear session storage if used

        // Display "Logging you out..." message for 3 seconds, then redirect
        const timer = setTimeout(() => {
            setLoggingOut(false);
            navigate('/');
        }, 1000); // Wait for 1 second before redirecting

        // Cleanup timer if the component unmounts before the timer finishes
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div style={styles.container}>
            {loggingOut ? (
                <h1 style={styles.message}>Logging you out...</h1>
            ) : (
                <h1 style={styles.message}>Redirecting...</h1>
            )}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
    },
    message: {
        fontSize: '1.5rem',
        color: '#555',
    },
};

export default Logout;
