import React, { Component } from 'react';
import Section from './components/Section';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

class Container extends Component {
  render() {
    return (
      <div
        className={`Container ${this.props.className}`}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  root: {}
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Layout>
          <Header />
          <Layout.Grow grow>
            <Section name="about">About</Section>
            <Section name="portfolio" alternate>
              Portfolio
            </Section>
            <Section name="contact">Contact</Section>
          </Layout.Grow>
          <div>Social</div>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
