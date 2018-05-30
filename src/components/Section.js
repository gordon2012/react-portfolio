import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    textAlign: 'center'
  }
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
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={10} md={8} lg={6} className={classes.rb}>
            {this.props.children}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Section);
