import React, { Component } from 'react';
import './App.css';

import Link from './components/Link';
import Section from './components/Section';

const Header = () => (
  <header>
    <Container className="nav">
      <Link to="/">Gordon Doskas</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </Container>
  </header>
);

const Footer = () => (
  <footer>
    Copyright {new Date().getFullYear()} Gordon Doskas
  </footer>
);

class Container extends Component {
  render() {
    return (
      <div className={`Container ${this.props.className}`} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <Container>
            <Section name="about">
              About
            </Section>
            <Section name="portfolio" alternate>
              Portfolio
            </Section>
            <Section name="contact">
              Contact
            </Section>
          </Container>
        </main>

        <div>
          Social
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
