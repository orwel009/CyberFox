import React from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  // Mock authentication state (replace with actual logic)
  const isLoggedIn = false; // Change to true for testing the logged-in state

  let navigate=useNavigate()

  const onLogReg=()=>{
    navigate('/login')
  }

  return (
    <div className="container mt-5">
      {/* Header Section */}
      <header className="text-center mb-4">
        <h1 className="display-4 text-primary">Save the Planet</h1>
        <p className="lead text-secondary">
          Join the mission to reduce paper-cup waste and protect our environment!
        </p>
      </header>

      {/* Main Content Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h2 className="card-title text-center text-success">Paper-Cup Awareness Event</h2>
          <p className="card-text text-center text-muted">
            Participate in our initiative to track and reduce the use of single-use paper cups. 
            Log your actions, earn rewards, and make a difference!
          </p>

          {!isLoggedIn ? (
            <div className="text-center mt-4">
              <button className="btn btn-primary btn-lg mx-2" onClick={onLogReg}>Login</button>
              <button className="btn btn-success btn-lg mx-2" onClick={onLogReg}>Register</button>
            </div>
          ) : (
            <div className="text-center mt-4">
              <h4 className="text-info">Welcome back!</h4>
              <p className="text-secondary">Start logging your actions and track your progress.</p>
            </div>
          )}
        </div>
      </div>

      {/* Educational Content Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h3 className="card-title text-center text-warning">Educational Content</h3>
          <p className="card-text text-muted">
            Did you know?
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Over 16 billion paper cups are used worldwide every year, contributing to massive deforestation and waste.</li>
            <li className="list-group-item">Most paper cups are lined with plastic, making them difficult to recycle.</li>
            <li className="list-group-item">Chemicals in paper cups, such as BPA and phthalates, can leach into your beverage and pose health risks.</li>
            <li className="list-group-item">Switching to reusable cups can significantly reduce environmental pollution and protect your health.</li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-5">
        <p className="text-muted">&copy; 2025 CyberFox. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashBoard;
