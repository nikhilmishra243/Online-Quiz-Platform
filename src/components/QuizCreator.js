import React, { useState } from 'react';

const QuizCreator = ({ onCreate }) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAddQuestion = () => {
    setQuestions([...questions, { question, options, correctAnswer }]);
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  const handleSaveQuiz = () => {
    onCreate(questions);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Create a New Quiz Question</h1>
      </div>
      <div className="quiz-form">
        <input
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="quiz-input"
        />
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
            className="quiz-input"
          />
        ))}
        <input
          type="text"
          placeholder="Correct Answer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          className="quiz-input"
        />
        <div className="button-group">
          <button onClick={handleAddQuestion} className="quiz-button">
            Add Question
          </button>
          <button onClick={handleSaveQuiz} className="quiz-button">
            Save Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCreator;
