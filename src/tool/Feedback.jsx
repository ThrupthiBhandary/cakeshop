import React from 'react';
import './Feedback.css';

function Feedback() {
  
  const handleSubmit = () => {
    alert("Thank you for your feedback!");
  };

  return (
    <div className="feedback-container">
      <h2>Leave Your Feedback</h2>
      <textarea placeholder="Enter your feedback here..." />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Feedback;
