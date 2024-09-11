import React, { useEffect, useState } from 'react';

const QuizTimer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      onTimeUp(); // Call the time-up function when timer reaches 0
    }

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <div>
      <h3>Time Left: {timeLeft}s</h3>
    </div>
  );
};

export default QuizTimer;
