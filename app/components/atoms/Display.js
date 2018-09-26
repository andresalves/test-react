import React from 'react';

const Display = ({ pinLength, value }) => {
  const letters = value.split('');
  const lettersLength = letters.length;
  return (
    <div className="display">
      {
        [...Array(pinLength || 0)].map((v, index) => {
          let letter = '';

          if (index < lettersLength) {
            letter = letters[index];
          }

          return (
            <div className="display__item">
              <span>{letter}</span>
            </div>
          );
        })
      }
    </div>
  );
};

export default Display;
