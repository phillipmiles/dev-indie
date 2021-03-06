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
import Nav from '../components/Nav';

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
      {/* <Header
        sx={{ bg: 'black', minHeight: 500, color: 'white' }}
        logoVariant="simple"
      > */}
      <header
        sx={{
          height: 412,
          bg: 'primary',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Nav
          invert
        // logoVariant="primary"
        />

        <ContentWrap
          maxWidth={'contentSmall'}
          sx={{ color: 'white', flexGrow: 1 }}
        >
          <Flex
            sx={{
              justifyContent: 'center',
              // alignItems: 'center',
              flexGrow: 1,
              flexDirection: 'column',
              // textAlign: 'center',
            }}
          >
            <div sx={{ mb: [3, 4] }}>
              <Text
                variant="detail"
                sx={{
                  // display: 'block',
                  bg: 'secondary',
                  color: 'primary',
                  // variant: ['text.body', 'text.body'],
                  px: 2,
                  py: 1,
                  // mb: [3, 4],
                }}
              >
                {tag}
              </Text>
            </div>
            <Heading
              as="h1"
              sx={{
                // textAlign: 'center',
                variant: ['text.heading4', 'text.heading3', 'text.heading2'],
              }}
            >
              {title}
            </Heading>
          </Flex>
        </ContentWrap>
      </header>

      <ContentWrap>
        <div sx={{ maxWidth: 'contentSmall', margin: 'auto', width: '100%' }}>
          <Paragraph
            variant="callout"
            sx={{
              mt: 5,
              //textAlign: 'center'
              opacity: 0.9,
            }}
          >
            Exploring stacking contexts, one of the most misunderstood
            mechanisms in CSS.
          </Paragraph>
          <Flex
            sx={{
              // color: 'neutral.9',
              // height: ['auto', 8],
              alignItems: 'center',
              // justifyContent: 'center',
              // mb: [4, 7],
              // mt: 2,
            }}
          >
            <Text sx={{ variant: ['text.detail', 'text.detail'], mr: 3 }}>
              {timePublished}
            </Text>
            <Text sx={{ variant: ['text.detail', 'text.detail'], mx: 3 }}>
              {readingLength} read
            </Text>
          </Flex>
        </div>
      </ContentWrap>
      <ContentWrap sx={{ mt: 7 }}>
        <div>
          <RenderMarkdown content={content} />
        </div>
      </ContentWrap>
      <ContentWrap maxWidth={'contentSmall'} sx={{ mb: 9 }}>
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
