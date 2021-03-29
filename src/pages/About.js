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
      <Header sx={{ minHeight: 500, color: 'white' }}>
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
        <div sx={{ maxWidth: '650px', width: '100%' }}>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            porttitor eros nec erat elementum, id pulvinar erat porta. Donec
            tellus purus, venenatis vitae condimentum vel, semper non sem.
            Phasellus eu consectetur diam, quis auctor libero.
          </Paragraph>
          <Paragraph>
            Phasellus eu quam quis elit vehicula pharetra. Nam aliquam dapibus
            mollis. Sed vehicula elit ac pharetra vehicula. Mauris porta odio
            eleifend venenatis consequat. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Praesent
            faucibus, sem at laoreet viverra, sem tortor condimentum erat, eu
            lacinia nisi leo vitae ante.
          </Paragraph>
          <Paragraph>
            Ut ac velit ac nunc sollicitudin finibus vitae vel libero. Nulla
            vehicula orci ac aliquet ornare. Aliquam iaculis sagittis diam in
            rutrum. Donec elementum vitae elit in imperdiet. Praesent eu
            facilisis magna.
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
