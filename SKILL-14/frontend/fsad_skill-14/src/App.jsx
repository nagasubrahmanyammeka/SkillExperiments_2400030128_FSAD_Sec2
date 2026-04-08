import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  const user = localStorage.getItem("user");

  return (
    <>
      {user && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;