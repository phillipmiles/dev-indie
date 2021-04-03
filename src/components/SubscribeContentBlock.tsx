/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import Paragraph from './Paragraph';
import SubscribeForm from './SubscribeForm';
import ContentWrap from './ContentWrap';

const SubscribeContentBlock = (props: unknown): JSX.Element => {
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
          <SubscribeForm shadow />
        </div>
      </Flex>
    </ContentWrap>
  );
};

export default SubscribeContentBlock;
