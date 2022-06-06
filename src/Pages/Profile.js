import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Profile() {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

    return (
      
      <div className="Profile">
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}>logout</button>
      </div>
      
    );
  }

  export default Profile;