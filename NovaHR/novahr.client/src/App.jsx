import React, { useState } from 'react';
import './App.css';

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    const handleLoginClick = () => {
        setShowWelcome(false);
    };

    const handleHomeClick = () => {
        setShowWelcome(true);
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
            </header>
            <main className={`main-content ${showWelcome ? 'fade-in' : 'fade-out'}`}>
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
                            <button type="button" className="entra-id-button">Login with Entra ID</button>
                        </form>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
