import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    auth.logout();
    navigate("/");
  }

  return (
    <div>
      <h2>Welcome {auth.user}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
