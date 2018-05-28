import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {}
};

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
    const { classes } = this.props;
    return (
      <div className={classes} onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
};

export default withStyles(styles)(Link);
