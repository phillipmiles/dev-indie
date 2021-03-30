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
        sx={{
          //minHeight: 500,
          bg: 'transparent',
        }}
        logoVariant="simple"
        invert={false}
      ></Header>
      <Flex sx={{ mb: 8, mx: 5, mt: 3 }}>
        <Image
          src={thumbSrc}
          sx={{
            // position: 'absolute',
            // borderRadius: 24,
            // borderStyle: 'solid',
            // borderWidth: 4,
            // borderColor: 'white',
            // width: '25%',
            // width: '380px',
            objectFit: 'cover',
            height: 600,
            width: '50%',
            // pl: 6,
            // mr: 5,
            flexShrink: 0,
          }}
        />
        <Flex
          sx={{
            width: '50%',
            // mt: 6,
            // pr: 9,
            // ml: 5,
            // justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            sx={{
              bg: 'neutral.9',
              pt: 6,
              pr: 9,
              pl: 8,
            }}
          >
            <Text variant="callout" sx={{ color: 'primaryLight', mb: 4 }}>
              {tag}
            </Text>
            <Heading as="h1" variant="heading2">
              {title}
            </Heading>

            <Flex
              sx={{
                color: 'neutral.7',
                // ml: '380px',
                height: 8,
                alignItems: 'center',
                mb: 7,
              }}
            >
              <Text sx={{ mr: 5 }}>{timePublished}</Text>
              <Text>{readingLength}</Text>
            </Flex>
          </div>
        </Flex>
      </Flex>
      <ContentWrap>
        {/* <div sx={{ margin: 'auto', maxWidth: 'contentSmall', width: '100%', mt: 6 }}>
          <Text variant="callout" sx={{ color: 'primaryLight', mb: 4 }}>
            {tag}
          </Text>
          <Heading as="h1" variant="heading2">
            {title}
          </Heading>

          <Flex
            sx={{
              color: 'neutral.7',
              // ml: '380px',
              height: 8,
              alignItems: 'center',
              mb: 7,
            }}
          >
            <Text sx={{ ml: 7, mr: 5 }}>{timePublished}</Text>
            <Text>{readingLength}</Text>
          </Flex>
        </div> */}
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
