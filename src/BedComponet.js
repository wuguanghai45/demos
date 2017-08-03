import React, { Component } from 'react';
import BedCharts from "./BedCharts";

class BedComponet extends Component {
  constructor(props) {
    super(props);
    const colorList = ['#18bfe7', '#38a0e7', '#0074c9', '#0a3859', '#0C1027', '#EB6100'];
    //数据
    const R = [15];//半圆半径
    const data = [65];//显示数据
    this.state = {
      colorList: colorList,
      R: R,
      data: data,
      width: 450,
      height: 300,
    };
  }
  render() {
    return (
        <BedCharts
            colorList={this.state.colorList}
            data={this.state.data}
            height={this.state.height}
            width={this.state.width}
            R={this.state.R}
        />
    );
  }
}

export default BedComponet;
