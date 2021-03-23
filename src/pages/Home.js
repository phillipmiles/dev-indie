/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import Nav from '../components/Nav';
import ContentWrap from '../components/ContentWrap';

const Home = () => {
  return (
    <div>
      <div sx={{ bg: 'primary', minHeight: '100vh', color: 'white' }}>
        <Nav invert />
        <ContentWrap>
          <Heading as="h1">Home</Heading>
          <Paragraph>Paragraph</Paragraph>
        </ContentWrap>
      </div>
      <ContentWrap>
        <Heading as="h2">The projects</Heading>
        <Paragraph>Paragraph</Paragraph>
      </ContentWrap>
    </div>
  );
};

Home.propTypes = {};

export default Home;
