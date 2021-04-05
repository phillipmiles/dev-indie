/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Heading from '../components/Heading';
import Header from '../components/Header';
import Image from '../components/Image';
import routeUrls from '../router/routeUrls';
import ContentWrap from '../components/ContentWrap';
import SubscribeContentBlock from '../components/SubscribeContentBlock';
import Footer from '../components/Footer';
import { imgAvatar } from '../assets/assetLoader';

const About = ({ posts }) => {
  return (
    <div>
      <Header sx={{ minHeight: 400, color: 'white' }}>
        <Flex sx={{ flexGrow: 1 }}>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
              pb: 7,
              flexGrow: 1,
            }}
          >
            <Heading as="h1" variant="heading2">
              About
            </Heading>
          </Flex>
          <div
            sx={{
              width: '380px',
              position: 'relative',
              mt: 6,
              ml: 7,
              flexShrink: 0,
            }}
          >
            <Image
              src={imgAvatar}
              sx={{
                position: 'absolute',
                bg: 'neutral.6',
                borderRadius: 24,
                borderStyle: 'solid',
                borderWidth: 4,
                borderColor: 'white',
                // width: '25%',
                width: '380px',
                objectFit: 'cover',
                height: 440,
              }}
            />
          </div>
        </Flex>
      </Header>

      <ContentWrap sx={{ mt: 8, mb: 9 }}>
        <div sx={{ maxWidth: 'contentSmall', width: '100%' }}>
          <Paragraph>
            Hi, I&apos;m Phillip and I love to make things with technology.
          </Paragraph>
          <Paragraph>
            Dev Indie is a site I created to chronicale my journey in attempting
            to make and hopefully monetize web and mobile apps.
          </Paragraph>
          <Paragraph>
            I expected to learn a lot about design, development and marketing
            throughout the process and thought a place to share this knowledge
            would be valuable with others who may be hoping to do something
            similar.
          </Paragraph>
          <Paragraph>
            In order to allow others get the most out of this site, I want to be
            brutally honest and show transparency into how the apps are
            performing. What the usage numbers are, what the running costs are,
            how much (if any) revenue is coming in.
          </Paragraph>
          <Paragraph>
            This data I could then align with any key actions and decisions I
            have made to maybe suggest what works and doesn&apos;t work in
            building successful apps.
          </Paragraph>
        </div>
      </ContentWrap>
      <SubscribeContentBlock />
      <Footer />
    </div>
  );
};

About.propTypes = {
  posts: PropTypes.array,
};

export default About;
