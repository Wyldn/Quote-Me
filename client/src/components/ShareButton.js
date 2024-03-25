import React from 'react';

const ShareButton = ({ quote }) => {
  const handleShare = () => {
    const shareText = `Check out this quote: "${quote.text}"`;
    if (navigator.share) {
      navigator.share({
        title: 'Share Quote',
        text: shareText,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported on this browser. Please copy the quote manually.');
    }
  };

  return (
    <button onClick={handleShare}>
      Share Quote
    </button>
  );
};

export default ShareButton;
