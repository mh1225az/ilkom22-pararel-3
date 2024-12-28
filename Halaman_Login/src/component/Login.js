import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (username === "pelajar" && password === "1234") {
            setError("");
            window.location.href = ""; 
        } else if (username === "pengajar" && password === "1234") {
            setError("");
            window.location.href = ""; 
        } else if (username === "admin" && password === "1234") {
            setError("");
            window.location.href = ""; 
        } else {
            setError("Username atau password salah!");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6" style={{ marginTop: "200px" }}>
                    <div className="card p-4">
                        <div className="card-body">
                            <h4 className="text-center">Halaman Login</h4>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="form-group" style={{ marginBottom: "20px" }}>
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="form-control"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button 
                                className="btn btn-primary btn-block" 
                                style={{ marginTop: "20px" }}
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;
