import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false); // Log out the user
    alert('You have been logged out');
    navigate('/');
  };

  const handleRewardClick = () => {
    navigate('/rewardPage');
  };

  const renderQuiz = () => {
    navigate('/quizPage')
  };

  const handleTrackUsage = () => {
    alert('Track your reusable cup usage!');
  };

  const handleCommunityEvent = () => {
    alert('Forum & Event features coming soon!');
  };

  const onChallange = () => {
    navigate('/ChallengePage')
  }

  return (
    <div className="container mt-5">
      {/* Header Section */}
      <header className="text-center mb-4">
        <h1 className="display-4 text-primary">Sustainable Cup Initiative</h1>
        <p className="lead text-secondary">Track your progress, earn rewards, and join the mission to reduce paper-cup waste!</p>
      </header>

      {/* Logout Button */}
      <div className="text-end mb-4">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Quizzes & Games Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h3 className="card-title text-info">Interactive Learning</h3>
          <p className="card-text">
            Engage with quizzes, games, and simulations to learn about the environmental impact of paper cups and sustainability.
          </p>
          <button className="btn btn-primary" onClick={renderQuiz}>Take a Quiz</button>
        </div>
      </div>

      {/* Rewards System Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h3 className="card-title text-success">Earn Rewards</h3>
          <p className="card-text">
            Every sustainable action counts! Earn points or badges by bringing your reusable cup.
          </p>
          <button className="btn btn-success" onClick={handleRewardClick}>Earn Points</button>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h3 className="card-title text-warning">Weekly Challenge</h3>
          <p className="card-text">
            Join the "Bring Your Cup Week" challenge! Reduce your paper cup usage and participate in the competition.
          </p>
          <button className="btn btn-warning" onClick={onChallange}>Join Challenge</button>
        </div>
      </div>

      {/* Tracking and Impact Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h3 className="card-title text-primary">Track Your Impact</h3>
          <p className="card-text">
            Use QR codes on reusable cups to track your usage, and monitor the environmental impact of your actions.
          </p>
          <button className="btn btn-info" onClick={handleTrackUsage}>Track Usage</button>
        </div>
      </div>

      {/* Forums and Events Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h3 className="card-title text-danger">Community Collaboration</h3>
          <p className="card-text">
            Share tips, host events, and collaborate with others to promote sustainable alternatives to paper cups.
          </p>
          <button className="btn btn-danger" onClick={handleCommunityEvent}>Join Forum & Events</button>
        </div>
      </div>

      {/* Local Partnerships Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h3 className="card-title text-dark">Local Partnerships</h3>
          <p className="card-text">
            Partner with local cafeterias and businesses to earn discounts for using reusable cups.
          </p>
          <button className="btn btn-dark" onClick={() => alert('Partnership details coming soon!')}>Explore Partnerships</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-5">
        <p className="text-muted">&copy; 2025 CyberFox. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
