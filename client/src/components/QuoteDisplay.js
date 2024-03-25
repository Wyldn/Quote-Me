import React from 'react';

const QuoteDisplay = ({ quote }) => {
  return (
    <div>
      <h2>Random Quote</h2>
      <blockquote>
        <p>{quote.text}</p>
      </blockquote>
    </div>
  );
};

export default QuoteDisplay;
