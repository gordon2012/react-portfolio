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

    let grid = this.props.grid || {};
    grid.xs = grid.xs || 12;
    grid.sm = grid.sm || 10;
    grid.md = grid.md || 8;
    grid.lg = grid.lg || 6;
    console.log(grid);

    return (
      <div className={classes.root} ref={this.props.name} id={this.props.name}>
        <Grid container justify="center" alignItems="center">
          <Grid
            item
            xs={grid.xs}
            sm={grid.sm}
            md={grid.md}
            lg={grid.lg}
            className={classes.rb}
          >
            {this.props.children}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Section);
