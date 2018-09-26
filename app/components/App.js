import React from 'react';
import Keyboard from './organisms/Keyboard';

class App extends React.Component {

  handler(pin) {
    console.log(pin);
  }

  render() {
    const settings = {
      keys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      character: '*',
      pinLength: 4,
      userPin: '0000',
      timeLocked: 30,
    };
    return (
      <div className="app">
        <div className="app__container">
          <Keyboard
            handler={this.handler}
            {...settings}
          />
        </div>
      </div>
    );
  }
}

export default App;

