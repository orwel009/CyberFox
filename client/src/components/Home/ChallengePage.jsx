import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChallengePage = () => {
    const navigate = useNavigate()
    const goBack=()=>{
        navigate('/home')
    }
  return (
    <div className="container mt-5">
      {/* Weekly Challenge Section */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h3 className="card-title text-warning">Weekly Challenge</h3>
          <p className="card-text">
            Join the "Bring Your Cup Week" challenge! Reduce your paper cup usage and participate in the competition.
          </p>
          <button
            className="btn btn-warning mx-2"
            onClick={() => alert('Challenge details coming soon!')}
          >
            Join Challenge
          </button>
          <button
            className="btn btn-warning mx-2"
            onClick={goBack}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
