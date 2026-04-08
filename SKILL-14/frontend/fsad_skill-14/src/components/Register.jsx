import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:2026/api/register", user);

    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>

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

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}