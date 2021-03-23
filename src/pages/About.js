/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Nav from '../components/Nav';

const About = () => {
  return (
    <div>
      <div>
        <Nav />
        <h1>About</h1>
        <Paragraph>Paragraph</Paragraph>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
