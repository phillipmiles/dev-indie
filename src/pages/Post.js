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
      <header>
        <div
          sx={{
            minHeight: ['none', 512],
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <div
            sx={{
              bg: 'black',
              zIndex: -1,
              height: [400, 512],
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
            }}
          />
          <Nav invert logoVariant={'simple'} />

          <ContentWrap sx={{ flexGrow: 1, color: ['black', 'white'] }}>
            <Flex
              sx={{
                flexGrow: 1,
                flexDirection: ['column', 'row'],
              }}
            >
              <div
                sx={{
                  width: ['auto', '380px'],
                  position: 'relative',
                  mt: [2, 6],
                  mr: [0, 5, 7],
                  // ml: ['-4px', 0],
                  flexShrink: 0,
                }}
              >
                <Image
                  src={thumbSrc}
                  sx={{
                    position: ['static', 'absolute'],
                    bg: 'neutral.6',
                    borderRadius: 24,
                    borderStyle: 'solid',
                    borderWidth: 4,
                    borderColor: 'white',
                    width: '100%',
                    objectFit: 'cover',
                    height: [355, 440],
                  }}
                />
              </div>

              <Flex
                sx={{
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  pb: [3, 7],
                  mt: 3,
                }}
              >
                <Text
                  sx={{
                    variant: ['text.body', 'text.callout'],
                    color: 'primaryLight',
                    mb: [3, 4],
                  }}
                >
                  {tag}
                </Text>
                <Heading
                  as="h1"
                  sx={{
                    variant: [
                      'text.heading4',
                      'text.heading3',
                      'text.heading2',
                    ],
                  }}
                >
                  {title}
                </Heading>
              </Flex>
            </Flex>
          </ContentWrap>
        </div>
        <ContentWrap>
          <Flex
            sx={{
              color: 'neutral.7',
              ml: [0, '380px'],
              height: ['auto', 8],
              alignItems: 'center',
              mb: [4, 7],
            }}
          >
            <Text
              sx={{ variant: ['text.detail', 'text.body'], ml: [5, 7], mr: 5 }}
            >
              {timePublished}
            </Text>
            <Text sx={{ variant: ['text.detail', 'text.body'] }}>
              {readingLength}
            </Text>
          </Flex>
        </ContentWrap>
      </header>
      {/* </Header> */}
      <ContentWrap>
        <div>
          <RenderMarkdown content={content} />
        </div>
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
