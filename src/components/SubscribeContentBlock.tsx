/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import Heading from './Heading';
import Image from './Image';
import Paragraph from './Paragraph';
import Text from './Text';
import Link from './Link';
import SubscribeForm from './SubscribeForm';
import ContentWrap from './ContentWrap';

interface Props {
  title?: string;
  imageSrc: string;
  description: string;
  tag: string;
  timePublished: string;
  readingLength: string;
  to: string;
}

const SubscribeContentBlock = ({
  title,
  imageSrc,
  description,
  tag,
  timePublished,
  readingLength,
  to,
  ...props
}: Props): JSX.Element => {
  return (
    <ContentWrap
      {...props}
      sx={{
        bg: 'primary',
        color: 'white',
        py: [6, 8],
      }}
    >
      <Flex sx={{ justifyContent: 'center' }}>
        <div sx={{ maxWidth: 'contentSmall' }}>
          <Paragraph
            variant="callout"
            sx={{ mb: 5, textAlign: ['center', 'left'] }}
          >
            Learn from my many mistakes by subscribing to the Dev Indie
            newsletter.
          </Paragraph>
          <SubscribeForm />
        </div>
      </Flex>
    </ContentWrap>
  );
};

export default SubscribeContentBlock;
