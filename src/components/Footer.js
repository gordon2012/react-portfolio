import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  center: {
    margin: 'auto'
  }
};

function Footer(props) {
  const { classes } = props;

  return (
    <AppBar position="static" color="secondary">
      <Toolbar className={classes.center}>
        <Typography variant="subheading" color="inherit">
          Copyright {new Date().getFullYear()} Gordon Doskas
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
