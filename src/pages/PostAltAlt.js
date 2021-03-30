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

      {/* <ContentWrap> */}
      <Flex
        sx={{
          backgroundImage: `url(${thumbSrc})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <ContentWrap>
          <div sx={{ bg: 'white', mx: 9, mt: '400px', pt: 7, pb: 5 }}>
            <div
              sx={{
                // bg: 'neutral.9',
                // pt: 6,
                // pr: 9,
                // pl: 8,
                maxWidth: 'contentSmall',
                width: '100%',
                margin: 'auto',
              }}
            >
              <Text variant="callout" sx={{ color: 'primaryLight', mb: 4 }}>
                {tag}
              </Text>
              <Heading as="h1" variant="heading2">
                {title}
              </Heading>
            </div>
          </div>
        </ContentWrap>
      </Flex>
      {/* </ContentWrap> */}
      <ContentWrap>
        <Flex
          sx={{
            color: 'neutral.7',
            // ml: '380px',
            maxWidth: 'contentSmall',
            width: '100%',
            margin: 'auto',
            height: 8,
            alignItems: 'center',
            // mb: 7,
          }}
        >
          <Text sx={{ mr: 5 }}>{timePublished}</Text>
          <Text>{readingLength}</Text>
        </Flex>
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
