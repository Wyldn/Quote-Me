import React from 'react';

const FavoriteQuotes = ({ favoriteQuotes }) => {
  return (
    <div>
      <h2>Favorite Quotes</h2>
      {favoriteQuotes.length > 0 ? (
        <ul>
          {favoriteQuotes.map((quote, index) => (
            <li key={index}>{quote.text}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite quotes saved yet.</p>
      )}
    </div>
  );
};

export default FavoriteQuotes;
