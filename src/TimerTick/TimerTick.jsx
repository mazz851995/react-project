import React, { Component } from 'react'

class TimerTick extends Component {
  
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      componentDidMount() {
        //   console.log("mount");
        this.timerID = setInterval( () => this.tick(), 1000);
      }
    
      componentWillUnmount() {
        // console.log("Unmount");
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({ date: new Date()});
      }
    render() {
        // console.log("render");
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default TimerTick
