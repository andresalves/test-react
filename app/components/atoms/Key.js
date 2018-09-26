import React from 'react';

const Key = ({ keyValue, action }) => {
  return (
    <button
      className="key"
      onClick={() => {
        action(keyValue);
      }}
    >
      {keyValue}
    </button>
  );
};

export default Key;
