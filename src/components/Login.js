import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mocking JWT Token based on hardcoded credentials
    if (username === "user1" && password === "password1") {
      const token = "mock-jwt-token-user1";
      localStorage.setItem("token", token);
      navigate("/component1");
    } else if (username === "user2" && password === "password2") {
      const token = "mock-jwt-token-user2";
      localStorage.setItem("token", token);
      navigate("/component2");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
