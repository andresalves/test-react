import React from 'react';
import Key from '../atoms/Key';

const Keys = ({ keys = [], action }) => {
  return (
    <div className="keys">
      {
        keys.map((key) => {
          return (
            <div
              className="keys__key">
              <Key
                key={key}
                keyValue={key}
                action={action}
              />
            </div>);
        })
      }
    </div>
  );
};

export default Keys;
