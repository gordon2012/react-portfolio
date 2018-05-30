import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {}
};

class Wrap extends Component {
  render() {
    const { classes, s } = this.props;

    let [xs, sm, md, lg] = s;
    xs = xs || 12;
    sm = sm || xs;
    md = md || sm;
    lg = lg || md;

    return (
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={xs} sm={sm} md={md} lg={lg} className={classes.gb}>
            {this.props.children}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Wrap);
