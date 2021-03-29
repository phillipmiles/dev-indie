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
import ButtonText from '../components/ButtonText';
import FontAwesomeIcon from '../components/FontAwesomeIcon';
import { faArrowRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Post = ({
  title,
  tag,
  topics,
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
        <div>
          <RenderMarkdown content={content} />
        </div>
        {/* </Flex> */}
      </ContentWrap>
      <ContentWrap maxWidth={650} sx={{ mb: 9 }}>
        <Flex
          sx={{
            my: 6,
            alignItems: 'center',
            color: 'primary',
            justifyContent: 'space-between',
          }}
        >
          <Flex sx={{ alignItems: 'center' }}>
            <FontAwesomeIcon icon={faArrowRight} />
            <ButtonText to={''} sx={{ ml: 3 }}>
              Discuss on Twitter
            </ButtonText>
          </Flex>
          <Flex sx={{ alignItems: 'center' }}>
            <FontAwesomeIcon icon={faTwitter} sx={{ mr: 3 }} />
            <FontAwesomeIcon icon={faFacebook} sx={{ mr: 3 }} />
            <FontAwesomeIcon icon={faShare} />
          </Flex>
        </Flex>
        <Paragraph sx={{ mb: 5 }}>
          Read more articles relating to topics...
        </Paragraph>
        <Flex sx={{ flexWrap: 'wrap' }}>
          {topics.map((topic) => (
            <div
              key={topic.title}
              sx={{
                color: 'primary',
                borderRadius: 8,
                bg: 'neutral.9',
                px: 3,
                py: 3,
                mr: '12px',
                mb: '12px',
                flexShrink: 0,
                flexGrow: 0,
              }}
            >
              <Text variant="detail">
                {topic.title} ({topic.count})
              </Text>
            </div>
          ))}
        </Flex>
      </ContentWrap>
      <SubscribeContentBlock />
      <Footer />
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
};

Post.defaultProps = {
  topics: [],
};

export default Post;
