import React, { Component } from 'react';
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form> </form>
    );
  }
}

export default Form;
