import React, { useState } from 'react';
import './App.css';

function App() {
    const [showWelcome, setShowWelcome] = useState(true);
    const [fading, setFading] = useState(false);

    const handleLoginClick = () => {
        setFading(true);
        setTimeout(() => {
            setShowWelcome(false);
            setFading(false);
        }, 500); // Matches the CSS transition duration (0.5s)
    };

    const handleHomeClick = () => {
        setFading(true);
        setTimeout(() => {
            setShowWelcome(true);
            setFading(false);
        }, 500); // Matches the CSS transition duration (0.5s)
    };

    return (
        <div className="app">
            <header className="toolbar">
                <nav className="navbar">
                    <ul>
                        <li><a href="#" onClick={handleHomeClick}>NovaHR</a></li>
                        <li><a href="#" onClick={handleLoginClick}>Login</a></li>
                        <li><a href="#">About NovaHR</a></li>
                        <li><a href="#">Plans and pricing</a></li>
                        <li><a href="#">Sign up</a></li>
                    </ul>
                </nav>
                <button className="try-now-button">Try now!</button>
            </header>
            <main className={`main-content ${fading ? 'fade-out' : 'fade-in'}`}>
                {showWelcome ? (
                    <div className="welcome-box">
                        <h1>Welcome to NovaHR</h1>
                        <p>Your all-in-one solution for HR management</p>
                    </div>
                ) : (
                    <div className="login-box">
                        <h1>Login</h1>
                        <form>
                            <input type="text" placeholder="Username" className="input-field" />
                            <input type="password" placeholder="Password" className="input-field" />
                            <button type="submit" className="login-button">Login</button>
                            <button type="button" className="microsoft-login-button">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Logo" className="microsoft-logo" />
                                Login with Microsoft
                            </button>
                        </form>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
