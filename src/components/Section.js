import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {}
};

class Section extends Component {
  static contextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  };

  handleClick = evt => {
    evt.preventDefault();
    this.context.linkHandler(this.props.to);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} ref={this.props.name} id={this.props.name}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles)(Section);
