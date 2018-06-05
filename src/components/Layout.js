import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    minHeight: '100vh'
    // border: '3px solid red'
  },
  grow: {
    flex: 1
  }
};

function Grow({ children }) {
  return <div>{children}</div>;
}

class Layout extends Component {
  static Grow = Grow;

  render() {
    const { classes } = this.props;

    const children = React.Children.map(this.props.children, child => {
      const grow = child.props.grow && classes.grow;
      return (
        <Grid item xs={12} className={grow}>
          {React.cloneElement(child, {})}
        </Grid>
      );
    });

    return (
      <Grid container direction="column" className={classes.root}>
        {children}
      </Grid>
    );
  }
}

export default withStyles(styles)(Layout);
