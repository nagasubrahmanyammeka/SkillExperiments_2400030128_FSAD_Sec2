import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/login");
      return;
    }

    axios
      .get(`http://localhost:2026/api/user/${storedUser.id}`)
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div className="page">
      <h2>Profile</h2>

      {user && (
        <div className="card">
          <p><b>ID:</b> {user.id}</p>
          <p><b>Username:</b> {user.username}</p>
        </div>
      )}
    </div>
  );
}