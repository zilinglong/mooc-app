import React from "react";
class DigitalClock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }
  componentDidMount() {
    this.timerId = setInterval(res => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }
  componentDidUpdate(props, state) {
    // console.log("componentDidUpdate state:", state);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div className="digital-clock-component jumbotron">
        电子时钟：{this.state.time.toLocaleString()}
      </div>
    );
  }
}
export default DigitalClock;
