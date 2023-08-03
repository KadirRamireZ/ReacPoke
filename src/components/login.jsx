import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();



        if (!username || !password) {
            setError('Por favor, ingresa un nombre de usuario y contraseña válidos.');
            return;
        }


        setError('');
        onLogin(username);
    };

    return (
        <div className="login-container">
            <h2>BIENVENIDO KADIR</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-btn">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;
