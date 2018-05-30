import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Section from '../components/Section';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Wrap from '../components/Wrap';

const styles = theme => ({
  root: {},
  sheet: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: theme.spacing.unit * 3,
    textAlign: 'justify'
  }),
  p: {
    marginBottom: 8
  },
  copy: {
    color: 'black'
  }
});

class About extends Component {
  state = {
    copy: [
      `I am a Front End Web Developer at Salt Creek Media Inc.`,
      `When I'm not building marketing landing pages for clients, I can be found adding features to our many web applications.`,
      `I often work with fundamental technologies such as HTML, JavaScript, PHP, and CSS, in addition to frameworks and libraries including CakePHP, Bootstrap, and JQuery. I exclusively employ version control using Git and GitHub, and participate in Scrum stand up meetings.`,
      `I have also learned other front end technologies that I have used in my many side projects such as React, Redux, SASS, npm, Gulp, Webpack, and more.`,
      `I am also an aspiring Video Game Developer. I have dabbled in many game creation technologies such as Unity 3D, Unreal, Phaser.io, and GameMaker. I am currently in the planning phase of my very first game: an evolution based side scrolling platformer starring two lucid dreaming Italian Greyhounds.`
    ]
  };

  render() {
    const { classes } = this.props;

    return (
      <Section name="about">
        <h1>Gordon Doskas</h1>
        <img
          src="https://avatars3.githubusercontent.com/u/9071982?v=3&s=460"
          alt="Gordon Doskas"
        />
        <h2>Front End Web Developer</h2>
        <Wrap s={[10]}>
          <Paper className={classes.sheet} elevation={4}>
            {this.state.copy.map((p, i) => (
              <Typography key={i} component="p" className={classes.p}>
                {p}
              </Typography>
            ))}
          </Paper>
        </Wrap>
      </Section>
    );
  }
}

export default withRoot(withStyles(styles)(About));
