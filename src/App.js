import React, { Component } from 'react';
import MouseChangeStyleWrap from "./MouseChangeStyleWrap";
import 'antd/dist/antd.less';
import { Row, Col } from "antd";
import TimeShow from "./time";

class App extends Component {
  render() {
    return (
      <TimeShow />
    );
  }
}

export default App;
