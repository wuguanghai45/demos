import React, { Component } from 'react';
import MouseChangeStyleWrap from "./MouseChangeStyleWrap";
import 'antd/dist/antd.less';
import { Row, Col } from "antd";

class App extends Component {
  render() {
    return (
      <Row >
        <div style={{height: 500}}> </div>
        <Col span={12} />
        <Col span={12}>
          <MouseChangeStyleWrap>
            这个是3dhover
          </MouseChangeStyleWrap>
        </Col>
        <div style={{height: 500}}> </div>
      </Row>
    );
  }
}

export default App;
