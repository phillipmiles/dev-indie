/** @jsx jsx */
import { jsx, Flex, Input } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import Nav from '../components/Nav';
import ContentWrap from '../components/ContentWrap';
import Image from '../components/Image';
import {
  imgAvatar,
  imgHomeHero,
  imgProjectsThumb,
  imgSomehowText,
  imgHeroMain,
  imgHeroOutline,
  imgHeroSecondary,
} from '../assets/assetLoader';
import ButtonText from '../components/ButtonText';
import routeUrls from '../router/routeUrls';
import PostListItem from '../components/PostListItem';
import SubscribeForm from '../components/SubscribeForm';
import SubscribeContentBlock from '../components/SubscribeContentBlock';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LazyLoader from '../components/LazyLoader';
import ContentBorder from '../components/ContentBorder';
import Text from '../components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Home = ({ posts }) => {
  return (
    <div>
      <ContentBorder left right>
        <header
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Flex
            sx={{
              position: 'relative',
              minHeight: '100vh',
              flexDirection: 'column',
              justifyContent: 'space-between',
              // bg: 'red',
            }}
          >
            <Nav />
            <Flex
              sx={{
                position: 'relative',
                // p: [4, 5],
                // pt: (theme) => [4, theme.sizes[8]],
                width: '100%',
                flexDirection: 'column',
                flex: '1 1 auto',
                // bg: 'green',
                justifyContent: 'center',
              }}
            >
              <ContentWrap
                maxWidth={1280}
                sx={
                  {
                    // bg: 'yellow'
                  }
                }
              >
                <Flex
                  sx={{
                    // flexGrow: 1,
                    // mt: 7,
                    my: 3,
                    flexDirection: [
                      'column-reverse',
                      'column-reverse',
                      'column-reverse',
                      'row',
                    ],
                  }}
                >
                  <Flex
                    sx={{
                      width: ['auto', 'auto', 'auto', '44%'],
                      justifyContent: [
                        'center',
                        'center',
                        'center',
                        'flex-start',
                      ],
                    }}
                  >
                    <div
                      sx={{
                        width: ['auto', '80%', '60%', 'auto'],
                        position: 'relative',
                      }}
                    >
                      <Image
                        src={imgHeroMain}
                        alt=""
                        sx={{
                          // height: 580,
                          // width: 554,
                          // position: 'absolute',
                          right: 0,
                          pl: 3,
                        }}
                      />
                      <Image
                        src={imgHeroOutline}
                        alt=""
                        sx={{
                          width: '100%',
                          position: 'absolute',
                          left: '-8px',
                          top: -24,
                        }}
                      />
                    </div>
                  </Flex>
                  <div
                    sx={{
                      // bg: 'purple',
                      alignSelf: 'center',
                      width: ['auto', 'auto', 'auto', '56%'],
                      // bg: 'red',
                      // pb: 128,
                      // pt: 7,
                      pl: [4, 6, 8, 8],
                      pr: [4, 6, 8, 0],
                      my: [6, 8, 7, 0],
                      textAlign: ['center', 'center', 'center', 'left'],
                      color: 'black',
                    }}
                  >
                    <Heading as="h1" sx={{ mb: 5 }}>
                      I&apos;m making
                      <br /> apps...{' '}
                      <Image
                        src={imgSomehowText}
                        alt="somehow"
                        sx={{ width: 260, display: 'inline' }}
                      />
                    </Heading>
                    <Paragraph
                      variant="callout"
                      sx={{ mb: 6, color: 'neutral.7' }}
                    >
                      Learn from my many mistakes by subscribing to the Dev
                      Indie newsletter.
                    </Paragraph>

                    <div>
                      <Flex sx={{ mb: 2, flexDirection: ['column', 'row'] }}>
                        <Input
                          placeholder="Enter your email"
                          sx={{
                            mr: [0, 2],
                            mb: ['12px', 0],
                            textAlign: ['center', 'left'],
                            bg: 'neutral.9',
                            color: 'primary',
                          }}
                        />
                        <button
                          sx={{
                            borderRadius: 32,
                            height: 56,
                            bg: 'secondary',
                            outline: 'none',
                            border: 'none',
                            color: 'primary',
                            fontFamily: 'body',
                            fontSize: '1',
                            px: 5,
                            width: ['100%', 'auto'],
                          }}
                        >
                          Subscribe
                        </button>
                      </Flex>
                      <Text
                        variant="detail"
                        sx={{
                          textAlign: 'center',
                          display: 'block',
                          color: 'neutral.7',
                        }}
                      >
                        Unsubscribe at{' '}
                        <span sx={{ fontStyle: 'italic' }}>any</span> time
                      </Text>
                    </div>
                    <Flex
                      sx={{
                        mt: 4,
                        justifyContent: [
                          'center',
                          'center',
                          'center',
                          'flex-start',
                        ],
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faReact}
                        size="2x"
                        sx={{ mr: 4 }}
                      />
                      <FontAwesomeIcon icon={faNodeJs} size="2x" />
                    </Flex>
                  </div>
                </Flex>
                {/* </Header> */}
              </ContentWrap>
            </Flex>
          </Flex>
        </header>
        {/* <ContentBorder left right> */}
        <ContentWrap sx={{ mt: 8 }}>
          <Flex
            sx={{
              bg: 'neutral.9',
              borderRadius: 24,
              overflow: 'hidden',
              mb: 8,
            }}
          >
            <LazyLoader height={468} sx={{ width: '50%' }}>
              <Image src={imgProjectsThumb} alt="" />
            </LazyLoader>
            <Flex
              sx={{
                p: 6,
                width: '50%',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Heading as="h3" sx={{ mb: 4 }}>
                  The projects
                </Heading>
                <Paragraph>
                  Take a look at detailed breakdowns for each of my apps. See
                  how they’re progressing and what decision’s I’m making in
                  developing them.
                </Paragraph>
              </div>
              <ButtonText
                to={routeUrls.projects}
                sx={{ alignSelf: 'flex-end' }}
              >
                Go to projects
              </ButtonText>
            </Flex>
          </Flex>
          <Heading as="h3" sx={{ mb: 6 }}>
            Recent posts
          </Heading>
          {posts.map((post) => (
            <PostListItem
              key={post.slug}
              title={post.title}
              description={post.description}
              imageSrc={post.thumbSrc}
              tag={post.tag}
              timePublished={post.timePublished}
              readingLength={post.readingLength}
              to={`${routeUrls.post}/${post.slug}`}
              sx={{ mb: [6, 7] }}
            />
          ))}
          <div sx={{ textAlign: 'center', mt: 3, mb: 9 }}>
            <ButtonText to={routeUrls.blog}>Browse all posts</ButtonText>
          </div>
        </ContentWrap>
      </ContentBorder>
      <SubscribeContentBlock />
      <Footer />
    </div>
  );
};

Home.defaultProps = {
  posts: [],
};

export default Home;
