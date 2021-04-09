/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import Image from './Image';
import Text from './Text';
import Link from './Link';
import ContentWrap from './ContentWrap';
import { imgAvatar } from '../assets/assetLoader';
import routeUrls from '../router/routeUrls';

const Footer = (props: unknown): JSX.Element => {
  return (
    <ContentWrap
      {...props}
      sx={{
        bg: 'black',
        color: 'white',
        py: [6, 7],
      }}
    >
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: ['column', 'row'],
        }}
      >
        <Flex
          sx={{
            // width: '33%',
            minWidth: 240,
            alignItems: 'center',
            mb: [4, 0],
          }}
        >
          <Image
            src={imgAvatar}
            sx={{ borderRadius: 64, width: 7, height: 7, mr: 4 }}
          />
          <Flex sx={{ flexDirection: 'column' }}>
            <Text
              sx={{
                //color: 'neutral.6',
                color: 'primaryLight',
              }}
            >
              My name is
            </Text>
            <Link
              to={routeUrls.about}
              variant="callout"
              sx={{ color: 'white', ':hover': { textDecoration: 'underline' } }}
            >
              Phillip Miles
            </Link>
          </Flex>
        </Flex>

        <Flex
          sx={{
            // width: '33%',
            minWidth: 240,
            flexDirection: ['row', 'column'],
            justifyContent: 'center',
          }}
        >
          <Text
            sx={{
              // color: 'neutral.6',
              color: 'primaryLight',
              variant: ['text.detail', 'text.body'],
              mx: [2, 0],
            }}
          >
            Follow me on Twitter
          </Text>
          <Link
            to="https://twitter.com/PhillipAMiles"
            external
            variant="detail"
            sx={{
              mx: [1, 0],
              color: 'white',
              ':hover': { textDecoration: 'underline' },
            }}
          >
            @PhillipAMiles
          </Link>
        </Flex>
        <Flex
          sx={{
            // width: '33%',
            minWidth: 240,
            flexDirection: ['row', 'column'],
            justifyContent: 'center',
          }}
        >
          <Text
            sx={{
              // color: 'neutral.6',
              color: 'primaryLight',
              variant: ['text.detail', 'text.body'],
              mx: [2, 0],
            }}
          >
            Get in touch
          </Text>
          <Link
            to="mailTo:phillip@devindie.dev"
            external
            sx={{
              mx: [1, 0],
              color: 'white',
              ':hover': { textDecoration: 'underline' },
            }}
          >
            phillip@devindie.dev
          </Link>
        </Flex>
      </Flex>
    </ContentWrap>
  );
};

export default Footer;
