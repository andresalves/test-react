import React from 'react';

const ResultMessagePin = ({ isValid, wrongTimes }) => {
  return (
    <div className="message">
      <label className="message__value">{isValid ? 'Ok' : `Error (${wrongTimes})`}</label>
    </div>
  );
};

export default ResultMessagePin;
