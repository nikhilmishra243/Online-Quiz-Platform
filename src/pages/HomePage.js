import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizCreator from '../components/QuizCreator';

const HomePage = () => {
  const [quiz, setQuiz] = useState([]);
  const navigate = useNavigate();

  const handleQuizCreation = (newQuiz) => {
    setQuiz(newQuiz);
    localStorage.setItem('quiz', JSON.stringify(newQuiz));
  };

  return (
    <div>
      <h1>Create a Quiz</h1>
      <QuizCreator onCreate={handleQuizCreation} />
      {quiz.length > 0 && (
        <button onClick={() => navigate('/quiz')}>Start Quiz</button>
      )}
    </div>
  );
};

export default HomePage;
