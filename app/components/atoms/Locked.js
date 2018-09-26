import React from 'react';

class Locked extends React.Component {
  constructor(props) {
    super(props);
    this.state = { start: false };
    this.tick = this.tick.bind(this);
  }

  tick() {
    const { start, seconds } = this.state;
    const { timeLocked, toggleMessageBlocked } = this.props;
    if (seconds === 0) {
      toggleMessageBlocked();
    } else {
      if (!start) {
        this.setState({
          start: true,
          seconds: timeLocked - 1
        });
      } else {
        this.setState({ seconds: seconds - 1 });
      }
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { timeLocked } = this.props;
    const { start, seconds } = this.state;

    const timer = start ? seconds : timeLocked;
    return (
      <div className="message">
        <label className="message__value">{`Locked for ${timer}s`}</label>
      </div>
    );
  }
}

export default Locked;

