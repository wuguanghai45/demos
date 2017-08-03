import React, { Component } from 'react';
import PropTypes from "prop-types";

const styles = {
  text: {
    width: "100%",
    height: 500,
    background: "white",
    padding: "100px 0",
    margin: "0 auto",
    border: "1px solid #ddd",
    perspective: "500px",
  },
  banner: {
    height: 300,
    width: 400,
    margin: "0 auto",
    background:  "#37D7B2",
    transition: "transform 0.1s",
    boxShadow: "0 0 15px rgba(0,0,0,0.25)",
    textAlign: "center",
    lineHeight: "300px",
    fontSize: 50,
    color: "#fff",
  }
}

class Mouse3DHover extends Component {
  static propTypes = {
    children: PropTypes.any,
    contentStyles: PropTypes.object,
    wrapStyles: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.state = {
      transform: "",
    };
  }

  handleMouseMove = (e) => {
    const textDom = this.text;


    const rect = textDom.getClientRects()[0];
    let x = e.pageX - rect.left;
    let y = e.pageY - rect.top;

    let centerX = textDom.offsetWidth / 2;
    let centerY = textDom.offsetHeight / 2;

    let deltaX = x - centerX;
    let deltaY = y - centerY;

    let percentX = deltaX / centerX
    let percentY = deltaY / centerY

    let deg = 10

    this.setState({
      transform: `rotateX(${ deg*-percentY }deg) rotateY(${ deg*percentX }deg)`,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      transform: ""
    });
  }

  render() {
    return (
      <div ref={ref => this.text=ref} onMouseMove={this.handleMouseMove} style={{ ...styles.text, ...styles.wrapStyles }} onMouseLeave={this.handleMouseLeave} >
        <div style={{...styles.banner, ...this.props.contentStyles, transform: this.state.transform}}>{this.props.children}</div>
      </div>
    );
  }
}
export default Mouse3DHover;
