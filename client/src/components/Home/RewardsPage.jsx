// RewardsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RewardsPage = () => {
  const navigate=useNavigate()
  const [points, setPoints] = useState(0);  // To track points (for Rewards system)

  // Increment points for rewards system
  const handleRewardClick = () => {
    setPoints(points + 10);
  };
  const goHome=()=>{
    navigate('/home')
  }


  return (
    <div className="container mt-5">
      {/* Rewards System Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h3 className="card-title text-success">Earn Rewards</h3>
          <p className="card-text">
            Every sustainable action counts! Earn points or badges by bringing your reusable cup.
          </p>
          <p>Your Points: <strong>{points}</strong></p>
          <button className="btn btn-success mx-2" onClick={handleRewardClick}>Earn Points</button>
          <button className="btn btn-success mx-2" onClick={goHome}>Go to Home</button>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
