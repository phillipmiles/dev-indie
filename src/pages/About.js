/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';

const About = () => {
  return (
    <div>
      <div>
        <h1>About</h1>
        <Paragraph>Paragraph</Paragraph>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
