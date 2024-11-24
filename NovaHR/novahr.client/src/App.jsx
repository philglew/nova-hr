import React, { useState } from 'react';
import './App.css';

function App() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    return (
        <div className="app">
            <div className="toolbar">
                <nav className="navbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#login" onClick={handleLoginClick}>Login</a></li>
                    </ul>
                </nav>
            </div>
            {showLogin && (
                <div className="login-box">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default App;
