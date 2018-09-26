import React from 'react';
import Keyboard from './molecules/Keyboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }

  handler(pin) {
    console.log(pin);
  }

  render() {
    const settings = {
      keys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      character: '*',
      pinLength: 4,
      userPin: '0000',
    };
    return (
      <div>
        <Keyboard
          handler={this.handler}
          {...settings}
        />
      </div>
    );
  }
}

export default App;

