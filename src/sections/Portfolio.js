import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Section from '../components/Section';

const styles = {
  root: {}
};

class Portfolio extends Component {
  render() {
    const { classes } = this.props;

    return <Section name="portfolio">Portfolio</Section>;
  }
}

export default withRoot(withStyles(styles)(Portfolio));
