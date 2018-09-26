import React from 'react';

const ResultMessagePin = ({ isValid, wrongTimes }) => {
  return (
    <div>
      {isValid ? 'Ok' : `Error (${wrongTimes})`}
    </div>
  );
};

export default ResultMessagePin;
