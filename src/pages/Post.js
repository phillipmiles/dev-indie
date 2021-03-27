/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Image from '../components/Image';
import RenderMarkdown from '../components/RenderMarkdown';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Text from '../components/Text';
import { imgProjectsThumb } from '../assets/assetLoader';
import ContentWrap from '../components/ContentWrap';
import SubscribeContentBlock from '../components/SubscribeContentBlock';
import Footer from '../components/Footer';

const Post = ({
  title,
  tag,
  readingLength,
  timePublished,
  content,
  thumbSrc,
}) => {
  return (
    <div>
      <Header
        sx={{ bg: 'black', minHeight: 500, color: 'white' }}
        logoVariant="simple"
      >
        <Flex sx={{ flexGrow: 1 }}>
          <div
            sx={{
              width: '380px',
              position: 'relative',
              mt: 6,
              mr: 7,
              flexShrink: 0,
            }}
          >
            <Image
              src={thumbSrc}
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

          <Flex
            sx={{ flexDirection: 'column', justifyContent: 'flex-end', pb: 7 }}
          >
            <Text variant="callout" sx={{ color: 'primaryLight', mb: 4 }}>
              {tag}
            </Text>
            <Heading as="h1" variant="heading2">
              {title}
            </Heading>
          </Flex>
        </Flex>
      </Header>
      <ContentWrap>
        <Flex
          sx={{
            color: 'neutral.7',
            ml: '380px',
            height: 8,
            alignItems: 'center',
            mb: 7,
          }}
        >
          <Text sx={{ ml: 7, mr: 5 }}>{timePublished}</Text>
          <Text>{readingLength}</Text>
        </Flex>
        {/* <Flex sx={{ flexDirection: 'column', alignItems: 'center', mb: 9 }}> */}
        <div sx={{ mb: 9 }}>
          <RenderMarkdown content={content} />
        </div>
        {/* </Flex> */}
      </ContentWrap>
      <SubscribeContentBlock />
      <Footer />
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
};

export default Post;
