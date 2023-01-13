// --------------------------------------------
// imports
// --------------------------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./base/Menu";
import "./index.css";
import AppointmentsPage from "./pages/AppointmentsPage";
import HomePage from "./pages/HomePage";
import UserForm from "./pages/UserForm";
import UserProfilePage from "./pages/UserProfilePage";
import UsersPage from "./pages/UsersPage";
import RequestPage from "./pages/RequestPage"

// --------------------------------------------
// main
// --------------------------------------------
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex" style={{ height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<HomePage />} />
            <Route path="/Users" element={<UsersPage />} />
            <Route path="/Profile" element={<UserProfilePage />} />
            <Route path="/UserForm" element={<UserForm />} />
            <Route path="/UserProfilePage" element={<UserProfilePage />} />
            <Route path="/Appointments" element={<AppointmentsPage />} />
            <Route path="/Requests" element={<RequestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
