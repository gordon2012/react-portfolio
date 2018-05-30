import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

const styles = {
  root: {
    backgroundImage: [
      'linear-gradient(rgba(0,25,0,0.4), rgba(0,50,0,0.7))',
      'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/303256/arches-945495_1920.jpg)'
    ],
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    color: 'white'
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Layout>
          <Header />
          <Layout.Grow grow>
            <About />
            <Portfolio />
            <Contact />
          </Layout.Grow>
          <div>Social</div>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
