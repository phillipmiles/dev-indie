/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import Image from './Image';
import Text from './Text';
import Link from './Link';
import ContentWrap from './ContentWrap';
import { imgAvatar } from '../assets/assetLoader';

interface Props {
  title?: string;
  imageSrc: string;
  description: string;
  tag: string;
  timePublished: string;
  readingLength: string;
  to: string;
}

const Footer = ({ ...props }: Props): JSX.Element => {
  return (
    <ContentWrap
      {...props}
      sx={{
        bg: 'black',
        color: 'white',
        py: 8,
      }}
    >
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Flex
          sx={{
            // width: '33%',
            minWidth: 240,
            alignItems: 'center',
          }}
        >
          <Image
            src={imgAvatar}
            sx={{ borderRadius: 64, width: 7, height: 7, mr: 4 }}
          />
          <Flex sx={{ flexDirection: 'column' }}>
            <Text sx={{ color: 'neutral.6' }}>My name is</Text>
            <Text variant="callout">Phillip Miles</Text>
          </Flex>
        </Flex>

        <Flex
          sx={{
            // width: '33%',
            minWidth: 240,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Text sx={{ color: 'neutral.6' }}>Follow me on Twitter</Text>
          <Text variant="detail">@PhillipAMiles</Text>
        </Flex>
        <Flex
          sx={{
            // width: '33%',
            minWidth: 240,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Text sx={{ color: 'neutral.6' }}>Get in touch</Text>
          <Text variant="detail">phillip@devindie.dev</Text>
        </Flex>
      </Flex>
    </ContentWrap>
  );
};

export default Footer;
