import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0;  // Get score from state
  const userAnswers = location.state?.userAnswers || [];  // Get user answers from state
  const quiz = JSON.parse(localStorage.getItem('quiz')) || [];  // Get quiz from localStorage

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">Quiz Result</h1>
      <p className="score">Your Score: {score} / {quiz.length}</p>
      
      <h2 className="analysis-header">Answer Analysis</h2>
      {quiz.map((question, index) => (
        <div key={index} className="question-result">
          <h3 className="question-text">{question.question}</h3>
          <p className="correct-answer">Correct Answer: {question.correctAnswer}</p>
          <p className="user-answer">Your Answer: {userAnswers[index] || 'No answer provided'}</p>
          <p className={`answer-status ${
            userAnswers[index] && question.correctAnswer.trim().toLowerCase() === userAnswers[index]?.trim().toLowerCase()
              ? 'correct'
              : 'incorrect'
          }`}>
            {userAnswers[index] && question.correctAnswer.trim().toLowerCase() === userAnswers[index]?.trim().toLowerCase()
              ? 'Correct'
              : 'Incorrect'}
          </p>
        </div>
      ))}
      <button className="back-home-button" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default ResultPage;
