/** @jsx jsx */
import { jsx, Flex, Input } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import Nav from '../components/Nav';
import ContentWrap from '../components/ContentWrap';
// import heroImage from '../assets/dev-indie-hero.jpg';
import heroImage from '../assets/dev-indie-hero.png';
import Image from '../components/Image';

const Home = () => {
  return (
    <div>
      <div
        sx={{
          bg: 'primary',
          background: 'linear-gradient(0deg, #004b95, #0075db, #0080ed)',
          color: 'white',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 800,
        }}
      >
        <Nav invert />

        <ContentWrap sx={{ flexGrow: 1 }}>
          <Flex sx={{ flexGrow: 1 }}>
            <div
              sx={{
                width: '44%',
                position: 'relative',
              }}
            >
              <Image
                src={heroImage}
                sx={{
                  position: 'absolute',
                  top: -16,
                  right: 0,
                  height: '112%',
                }}
              />
            </div>
            <div
              sx={{
                width: '56%', //bg: 'red',
                pb: 150,
                pt: 8,
              }}
            >
              <Heading as="h1">
                I'm making
                <br /> apps, somehow.
              </Heading>
              <Paragraph variant="callout" sx={{ mb: 6 }}>
                Learn from my many mistakes by subscribing to the Dev Indie
                newsletter.
              </Paragraph>
              <Flex>
                <Input
                  placeholder="Enter your email"
                  sx={{ boxShadow: '0 2px 4px 0 #004a88', mr: 2 }}
                />
                <button
                  sx={{
                    borderRadius: 32,
                    height: 56,
                    bg: 'secondary',
                    boxShadow: '0 2px 4px 0 #004a88',
                    outline: 'none',
                    border: 'none',
                    color: 'primary',
                    fontFamily: 'body',
                    fontSize: '1',
                    px: 5,
                  }}
                >
                  Subscribe
                </button>
              </Flex>
              <Paragraph variant="detail" sx={{ textAlign: 'center' }}>
                Unsubscribe at any time
              </Paragraph>
            </div>
          </Flex>
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
