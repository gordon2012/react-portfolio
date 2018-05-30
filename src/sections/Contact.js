import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Section from '../components/Section';

const styles = {
  root: {}
};

class Contact extends Component {
  render() {
    const { classes } = this.props;

    return <Section name="contact">Contact</Section>;
  }
}

export default withRoot(withStyles(styles)(Contact));
