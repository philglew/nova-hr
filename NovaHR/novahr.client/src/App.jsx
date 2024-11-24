import React, { useState } from 'react';
import './App.css';

function App() {
    const [showLoginBox, setShowLoginBox] = useState(false);

    const handleCloseLoginBox = () => {
        setShowLoginBox(false);
    };

    return (
        <div className="app">
            <header className="toolbar">
                <nav className="navbar">
                    <ul>
                        <li><a href="#">NovaHR</a></li>
                        <li><a href="#!" onClick={(e) => { e.preventDefault(); setShowLoginBox(true); }}>Login</a></li>
                        <li><a href="#">About NovaHR</a></li>
                        <li><a href="#">Plans and pricing</a></li>
                        <li><a href="#">Sign up</a></li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <div className="welcome-box">
                    <h1>Welcome to NovaHR</h1>
                    <p>Your all-in-one solution for HR management</p>
                </div>
            </main>
            {showLoginBox && (
                <div className="login-box">
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                    <button style={{ marginTop: '10px' }}>Login with Entra ID</button>
                    <button onClick={handleCloseLoginBox} style={{ marginTop: '10px', backgroundColor: '#ccc', color: 'black' }}>Close</button>
                </div>
            )}
        </div>
    );
}

export default App;
