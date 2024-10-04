import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminComp from "./components/Admin";
import ClientComp from "./components/Component2";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/component1"
            element={
              <ProtectedRoute>
                <AdminComp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/component2"
            element={
              <ProtectedRoute>
                <ClientComp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
