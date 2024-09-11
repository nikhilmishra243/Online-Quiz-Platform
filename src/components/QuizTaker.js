import React, { useState } from 'react';

const QuizTaker = ({ quiz, onComplete, setUserAnswers }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);  // Track current question
  const [selectedAnswer, setSelectedAnswer] = useState(null);  // Track selected answer for each question
  const [score, setScore] = useState(0);  // Track score
  const [answers, setAnswers] = useState([]);  // Store all user answers

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);  // Set selected answer
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      alert('Please select an answer before moving on');
      return;
    }
  
    // Log both answers for debugging
    console.log("Selected Answer:", selectedAnswer);
    console.log("Correct Answer:", quiz[currentQuestion].correctAnswer);
  
    // Trim and compare the answers in a case-insensitive manner
    const isCorrect =
      quiz[currentQuestion].correctAnswer.trim().toLowerCase() ===
      selectedAnswer.trim().toLowerCase();
  
    console.log("Is Correct:", isCorrect);
  
    // Update score if the answer is correct
    if (isCorrect) setScore(score + 1);
  
    // Store user answer for analysis later
    setAnswers([...answers, selectedAnswer]);
  
    // Move to the next question or submit the quiz
    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset for the next question
    } else {
      // Pass final score and user answers back to QuizPage
      setUserAnswers([...answers, selectedAnswer]);
      onComplete(score + (isCorrect ? 1 : 0)); // Complete quiz with final score
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-question">{quiz[currentQuestion].question}</h2>

      {/* Display multiple choice options */}
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
