const getQuizData = () => {
    return JSON.parse(localStorage.getItem('quiz')) || [];
  };
  
  const saveQuizData = (quiz) => {
    localStorage.setItem('quiz', JSON.stringify(quiz));
  };
  
  export { getQuizData, saveQuizData };
  