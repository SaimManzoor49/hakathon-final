import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useAuth } from "../../context/AuthContext";

export default function Index() {
  const { user } = useAuth();


  if (user.email) {
    return <Navigate to={"/dashboard"} />;
  } else {
    return (
      <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </>
    );
  }
}
