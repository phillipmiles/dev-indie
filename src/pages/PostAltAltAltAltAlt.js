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
import ContentBorder from '../components/ContentBorder';

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
          // height: 512,
          // bg: 'neutral.9',

          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Nav
          invert
          sx={{
            bg: 'primary',
            // background: 'linear-gradient(180deg, #0075db, #0080ed)',
          }}
          logoVariant="full"
        />
        <ContentBorder
          left
          right
          top
          sx={{
            pt: 8,
          }}
        >
          <ContentWrap
            maxWidth={'contentSmall'}
            sx={{ color: 'black', textAlign: 'center' }}
          >
            <div sx={{ mb: [3, 4] }}>
              <Text
                variant="detail"
                sx={{
                  bg: 'secondary',
                  color: 'primary',
                  // textTransform: 'uppercase',
                  // fontWeight: 'bold',
                  px: 2,
                  py: 1,
                }}
              >
                {tag}
              </Text>
            </div>
            <Heading
              as="h1"
              sx={{
                // textAlign: 'center',
                mb: 5,
                variant: ['text.heading4', 'text.heading3', 'text.heading2'],
              }}
            >
              {title}
            </Heading>
            <Paragraph
              variant="callout"
              sx={{
                mb: 5,
                //textAlign: 'center'
                // opacity: 0.9,
                color: 'neutral.7',
              }}
            >
              Exploring stacking contexts, one of the most misunderstood
              mechanisms in CSS.
            </Paragraph>
            <Flex
              sx={{
                color: 'neutral.7',
                // height: ['auto', 8],
                alignItems: 'center',
                justifyContent: 'center',
                // mb: [4, 7],
                // mt: 2,
              }}
            >
              {/* <Text
                variant="detail"
                sx={{
                  mr: 3,
                  // fontWeight: 'bold',
                }}
              >
                By Phillip Miles
              </Text> */}
              <Text
                variant="detail"
                sx={{
                  mx: 3,
                  // fontWeight: 'bold',
                }}
              >
                {timePublished}
              </Text>
              <Text
                variant="detail"
                sx={{
                  mx: 3,
                  // fontWeight: 'bold'
                }}
              >
                {readingLength} read
              </Text>
            </Flex>
          </ContentWrap>
        </ContentBorder>
      </header>
      <ContentBorder left right>
        <ContentWrap sx={{ pt: 8 }}>
          <div>
            <RenderMarkdown content={content} />
          </div>
        </ContentWrap>
        <ContentWrap maxWidth={'contentSmall'} sx={{ pb: 9 }}>
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
      </ContentBorder>
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
