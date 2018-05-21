import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
  static contextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  };

  handleClick = evt => {
    evt.preventDefault();
    this.context.linkHandler(this.props.to);
  };

  render() {
    return <div onClick={this.handleClick}>{this.props.children}</div>;
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
};

export default Link;
