/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';

const Home = () => {
  return (
    <div>
      <div>
        <h1>Home</h1>
        <Paragraph>Paragraph</Paragraph>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
