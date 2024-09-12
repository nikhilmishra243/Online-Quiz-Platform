import React, { useState } from 'react';

const QuizTaker = ({ quiz, onComplete, setUserAnswers }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]); // Stores all user answers

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      alert('Please select an answer before moving on');
      return;
    }

    // Checking the selected answers
    const isCorrect = quiz[currentQuestion].correctAnswer.trim().toLowerCase() === selectedAnswer.trim().toLowerCase();

    // Updating the score if answer is correct
    if (isCorrect) setScore(score + 1);

    // Updating answers array
    const updatedAnswers = [...answers, selectedAnswer];
    setAnswers(updatedAnswers);
    setUserAnswers(updatedAnswers);  // Passing updated answers to the parent

    // Checking if it's the last question
    if (currentQuestion + 1 < quiz.length) {
      // Moving to the next question
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);  // Resetting selected answer
    } else {
      
      onComplete(score + (isCorrect ? 1 : 0));  //  
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-question">{quiz[currentQuestion].question}</h2>
      <div className="quiz-options">
        {quiz[currentQuestion].options.map((option, index) => (
          <label key={index} className="option-label">
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleAnswerSelection(option)}  
              className="option-input"
            />
            {option}
          </label>
        ))}
      </div>
      <button className="quiz-button" onClick={handleNextQuestion}>
        {currentQuestion + 1 === quiz.length ? 'Submit Quiz' : 'Next Question'}
      </button>
    </div>
  );
};

export default QuizTaker;
