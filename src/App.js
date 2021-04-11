import React, { Component } from 'react';
import HandSeconds from './components/Seconds';
import HandMinutes from './components/Minutes';
import HandHours from './components/Hours';


class App extends Component {
  constructor(){
    super()
    this.state = {time: new Date()}
  }

  currentTime() {
    this.setState({time: new Date()})
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render(){
    return (
        <section className="wrap">
          <div className="clock">
          <div className="clock-inner">
            <div className="clock-center"></div>
            <HandSeconds currentTime={this.state.time}/>
            <HandMinutes currentTime={this.state.time}/>
            <HandHours currentTime={this.state.time}/>
          </div>
          </div>
        </section>
    );
  }
}

export default App;
