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
                <h1>Welcome to NovaHR</h1>
                <p>Your all-in-one solution for HR management</p>
            </main>
        </div>
    );
}

export default App;
