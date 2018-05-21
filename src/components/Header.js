import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from './Link';

const styles = {
  flex: {
    flex: 1
  }
};

function Header(props) {
  const { classes } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Gordon Doskas
        </Typography>
        <Link to="/about">
          <Button color="inherit">About</Button>
        </Link>
        <Link to="/portfolio">
          <Button color="inherit">Portfolio</Button>
        </Link>
        <Link to="/contact">
          <Button color="inherit">Contact</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
