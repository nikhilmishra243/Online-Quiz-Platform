import React, { useState } from 'react';
import QuizTaker from '../components/QuizTaker';
import { useNavigate } from 'react-router-dom';
import QuizTimer from '../components/QuizTimer';

const QuizPage = () => {
  const navigate = useNavigate();
  const quiz = JSON.parse(localStorage.getItem('quiz')) || [];
  const [quizDuration] = useState(60);  // Set timer for 60 seconds
  const [userAnswers, setUserAnswers] = useState([]);

  const handleQuizCompletion = (finalScore) => {
    navigate('/result', { state: { score: finalScore, userAnswers: userAnswers } });
  };

  const handleTimeUp = () => {
    handleQuizCompletion(0);  // Handle submission if time runs out
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">Take the Quiz</h1>
      {quiz.length > 0 ? (
        <>
          <QuizTimer duration={quizDuration} onTimeUp={handleTimeUp} className="quiz-timer" />
          <QuizTaker quiz={quiz} onComplete={handleQuizCompletion} setUserAnswers={setUserAnswers} />
        </>
      ) : (
        <p className="no-quiz-message">No quiz found. Please create a quiz first.</p>
      )}
    </div>
  );
};

export default QuizPage;
