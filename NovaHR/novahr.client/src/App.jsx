import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app">
            <header className="toolbar">
                <nav className="navbar">
                    <ul>
                        <li><a href="#">NovaHR</a></li>
                        <li><a href="#">Login</a></li>
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
                <div className="content-box">
                    <div className="content-image">
                        {/* This div serves as a placeholder for an image */}
                    </div>
                    <div className="content-text">
                        <h2>Streamline Your HR Processes</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;