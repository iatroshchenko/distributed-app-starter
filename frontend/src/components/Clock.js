import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: props.name
    };
  }
  apiCheck(){
    fetch('http://localhost:8081')
      .then(result => result.json())
      .then(result => {
        console.log(result);
      });
  }
  tick(){
    this.setState({
      date: new Date()
    });
    // this.apiCheck();
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log('clock mounted!');
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('clock will unmount');
  }
  render () {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <span>Сейчас {this.state.date.toLocaleTimeString()}.</span>
      </div>
    );
  }
}

export default Clock;