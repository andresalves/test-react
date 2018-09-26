import React from 'react';
import debounce from '../../util/util';
import ResultMessagePin from '../atoms/ResultPin';
import Keys from '../molecules/Keys';
import Display from '../atoms/Display';
import Locked from '../atoms/Locked';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBlocked: false,
      showMessage: false,
      valueModel: '',
      valueView: '',
      isValid: false,
      countWrong: 0,
    };
    this.pressKey = this.pressKey.bind(this);
    this.validatePin = this.validatePin.bind(this);
    this.toggleMessageBlocked = this.toggleMessageBlocked.bind(this);
    this.showPin = debounce(this.showPin, 300);
    this.toggleMessage = debounce(this.toggleMessage, 500);
  }

  toggleMessageBlocked() {
    const { isBlocked } = this.state;

    if (isBlocked) {
      this.setState({
        isBlocked: false,
        countWrong: false,
      });
    }
  }

  toggleMessage() {
    const { countWrong } = this.state;
    const isBlockedAux = countWrong === 3;
    this.setState({
      showMessage: false,
      isBlocked: isBlockedAux,
      countWrong: isBlockedAux ? 0 : countWrong,
    });
    // todo add interval to enable the pinpad
  }

  validatePin() {
    const { handler, userPin, pinLength } = this.props;
    const { valueModel, countWrong } = this.state;
    let isValid = false;
    let count = countWrong;
    const valueLength = valueModel.length;

    if (valueLength === pinLength) {
      if (valueModel === userPin) {
        isValid = true;
        count = 0;
      } else {
        count += 1;
      }

      if (isValid) {
        handler(valueModel);
      }

      this.setState({
        isValid,
        countWrong: count,
        valueModel: '',
        valueView: '',
        showMessage: true,
      }, this.toggleMessage);
    }
  }

  pressKey(key) {
    const { valueModel } = this.state;
    const { pinLength, character } = this.props;
    const valueLength = valueModel.length;

    if (valueLength < pinLength) {
      let valueView = '';
      for (let i = 0; i < valueLength; i++) {
        valueView += character;
      }

      valueView += key;

      this.setState({
        valueView,
        valueModel: `${valueModel}${key}`,
      }, this.showPin);
    }
  }

  showPin() {
    const { valueModel } = this.state;
    const { character } = this.props;
    const valueLength = valueModel.length;

    let valueView = '';
    for (let i = 0; i < valueLength; i++) {
      valueView += character;
    }

    this.setState({
      valueView,
    }, this.validatePin);
  }

  render() {
    const { keys, timeLocked, pinLength } = this.props;
    const {
      isBlocked,
      showMessage, valueView, isValid, countWrong,
    } = this.state;

    return (
      <div className="pin-pad">
        <div className="pin-pad__container">
          <div className="pin-pad__display">
            <Display pinLength={pinLength} value={valueView}/>
          </div>
          <div className="pin-pad__keyboard">
            <Keys
              keys={keys}
              action={this.pressKey}/>
          </div>
        </div>
        {
          !isBlocked && showMessage && (
            <div className="pin-pad__message">
              <ResultMessagePin
                isValid={isValid}
                wrongTimes={countWrong}
              />
            </div>
          )
        }
        {
          isBlocked && (
            <div className="pin-pad__message">
              <Locked toggleMessageBlocked={this.toggleMessageBlocked} timeLocked={timeLocked}/>
            </div>
          )
        }
      </div>);
  }
}

export default Keyboard;

