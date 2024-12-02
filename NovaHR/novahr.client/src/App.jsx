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
            <div className="toolbar-container">
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
                </header>
                <button className="try-now-button">Try now!</button>
            </div>
            <main className={`main-content ${fading ? 'fade-out' : 'fade-in'}`}>
                {showWelcome ? (
                    <div className="welcome-box">
                        <h1>Welcome to NovaHR</h1>
                        <p>Your all-in-one solution for human resources</p>
                    </div>
                ) : (
                    <div className="login-box">
                        <h1>Login</h1>
                        <form>
                            <input type="text" placeholder="Username" className="input-field" />
                            <input type="password" placeholder="Password" className="input-field" />
                            <div className="remember-me-container">
                                <label>
                                    <input type="checkbox" className="checkbox-input" />
                                    Remember me
                                </label>
                                <a href="#" className="forgot-password-link">Forgot password?</a>
                            </div>
                            <button type="submit" className="login-button">Login</button>
                            <button type="button" className="microsoft-login-button">
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
