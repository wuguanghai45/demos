import React, { Component } from 'react';

class TimeShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeString: this.getTimeString(),
    };
  }

  componentDidMount() {
    this.timeRun = this.bindTimeInterval();
  }

  componentWillUnmount() {
    clearInterval(this.timeRun);
  }

  bindTimeInterval = () => {
    setInterval(()=> {
      this.setState({
        timeString: this.getTimeString()
      });
    }, 1000)
  }

  getTimeString = () => {
    let date = new Date()
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    const D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    const m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    const s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y+M+D+h+m+s;
  }

  render() {
    return (
      <span>
        {this.state.timeString}
      </span>
    );
  }
}

export default TimeShow;
