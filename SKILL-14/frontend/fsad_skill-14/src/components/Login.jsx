import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:2026/api/login", user);

      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/home");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}