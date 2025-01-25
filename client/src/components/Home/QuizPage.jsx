import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {

    const navigate = useNavigate()
  // State to keep track of the current question, answers, and user's score
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Quiz questions and answers
  const questions = [
    {
      questionText: 'How many paper cups are used worldwide each year?',
      options: ['1 Billion', '5 Billion', '16 Billion', '100 Billion'],
      correctAnswer: '16 Billion',
    },
    {
      questionText: 'What is one of the main issues with paper cups?',
      options: [
        'They are easy to recycle',
        'They are lined with plastic and difficult to recycle',
        'They decompose quickly in landfills',
        'They are made from organic materials',
      ],
      correctAnswer: 'They are lined with plastic and difficult to recycle',
    },
    {
      questionText: 'What is a major environmental benefit of using reusable cups?',
      options: [
        'Reduces CO2 emissions',
        'Saves water',
        'Requires no energy to produce',
        'All of the above',
      ],
      correctAnswer: 'Reduces CO2 emissions',
    },
    {
      questionText: 'Which of the following materials is commonly used to line paper cups?',
      options: ['Cardboard', 'Plastic', 'Aluminum', 'Glass'],
      correctAnswer: 'Plastic',
    },
    {
      questionText: 'What is the best alternative to using disposable paper cups?',
      options: ['Biodegradable cups', 'Plastic cups', 'Reusable cups', 'Foam cups'],
      correctAnswer: 'Reusable cups',
    },
  ];

  // Handle user answer and move to the next question
  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const goHome=()=>{
    navigate('/home')
  }

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4 text-primary">Sustainability Quiz</h1>
        <p className="lead text-secondary">Test your knowledge on paper cup waste and sustainability!</p>
      </header>

      {!showResult ? (
        <div className="card shadow-lg mb-4">
          <div className="card-body">
            <h3 className="card-title text-info">{questions[currentQuestion].questionText}</h3>
            <div className="list-group">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="list-group-item list-group-item-action"
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="card shadow-lg mb-4">
          <div className="card-body">
            <h3 className="card-title text-success">Quiz Completed!</h3>
            <p className="card-text">
              You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>!
            </p>
            <p className="text-muted">
              Great job! Keep up the efforts to reduce paper cup waste and make the planet greener.
            </p>
            <button className="btn btn-primary mx-2" onClick={() => window.location.reload()}>
              Try Again
            </button>
            <button className="btn btn-primary mx-2" onClick={goHome}>
              Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="text-center mt-5">
        <p className="text-muted">&copy; 2025 CyberFox. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default QuizPage;
