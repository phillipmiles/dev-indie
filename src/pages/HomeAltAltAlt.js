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
  imgBlank,
  imgBlankYellow,
  imgButtonOutline1,
  imgCode,
} from '../assets/assetLoader';
import ButtonText from '../components/ButtonText';
import routeUrls from '../router/routeUrls';
import SubscribeForm from '../components/SubscribeForm';
import SubscribeFooter from '../components/SubscribeFooter';
import Header from '../components/Header';
import LazyLoader from '../components/LazyLoader';
import Text from '../components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import PageWithFooter from '../components/generic/PageWithFooter';
import Button from '../components/Button';
import { keyframes } from '@emotion/react';
import PostCardTag from '../components/PostCardTag';
import LinkCard from '../components/LinkCard';
import PostCardHeading from '../components/PostCardHeading';
import { isoDateStringToLabel } from '../utils/time';
import ContentBlock from '../components/ContentBlock';

const hover1 = keyframes({
  '0%': { transform: 'translateY(10px)' },
  '50%': { transform: 'translateY(-10px)' },
  '100%': { transform: 'translateY(10px)' },
});

const hover2 = keyframes({
  '0%': { transform: 'translateY(10px) scale(0.95) translateX(-50%)' },
  '50%': { transform: 'translateY(-10px) scale(0.95) translateX(-50%)' },
  '100%': { transform: 'translateY(10px) scale(0.95) translateX(-50%)' },
});

const hover3 = keyframes({
  '0%': {
    transform: 'translateY(10px) scale(0.9) ',
  },
  '50%': {
    transform: 'translateY(-10px) scale(0.9) ',
  },
  '100%': {
    transform: 'translateY(10px) scale(0.9) ',
  },
});

const Home = ({ posts }) => {
  return (
    <PageWithFooter footerComponent={<SubscribeFooter />}>
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
            <ContentWrap maxWidth={1280}>
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
                  <Heading as="h1" sx={{ mb: 6 }}>
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
                    sx={{
                      mb: 6,
                      //color: 'neutral.7'
                    }}
                  >
                    Let me share with you what I learn by subscribing to the Dev
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
                          ':focus': {
                            boxShadow: (theme) =>
                              `0 0px 0px 4px ${theme.colors.primaryLight}`,
                          },
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
                      color: 'neutral.7',
                    }}
                  >
                    <FontAwesomeIcon icon={faReact} size="2x" sx={{ mr: 4 }} />
                    <FontAwesomeIcon icon={faNodeJs} size="2x" />
                  </Flex>
                </div>
              </Flex>
            </ContentWrap>
          </Flex>
        </Flex>
      </header>
      <ContentBlock sx={{ bg: 'neutral.9', mt: 6 }}>
        <ContentWrap>
          <Flex>
            <div sx={{ p: 6, pl: 0, width: '50%' }}>
              <Heading as="h3" sx={{ mb: 4 }}>
                The projects
              </Heading>
              <Paragraph sx={{ mb: 6 }}>
                Take a look at detailed breakdowns for each of my apps. See how
                they’re progressing and what decision’s I’m making in developing
                them.
              </Paragraph>

              <Button
                to={routeUrls.projects}
                sx={{
                  alignSelf: 'flex-start',
                  // position: 'relative',
                  // '::after': {
                  //   content: "''",
                  //   position: 'absolute',
                  //   backgroundImage: `url(${imgButtonOutline1})`,
                  //   backgroundRepeat: 'no-repeat',
                  //   top: '-8px',
                  //   left: '-6px',
                  //   right: '4px',
                  //   bottom: '2px',
                  //   backgroundSize: '100% 100%',
                  //   transform: 'scale(1.1)',
                  // },
                }}
              >
                Go to projects
              </Button>
            </div>
            <div
              sx={{
                pl: 6,
                width: '50%',
              }}
            >
              <div
                sx={{
                  position: 'relative',
                  height: 395,
                }}
              >
                {/* <LazyLoader height={395}> */}
                <Image
                  src={imgBlankYellow}
                  alt=""
                  sx={{
                    borderRadius: 24,
                    position: 'absolute',
                    height: 395,
                    width: '456px',
                    top: 0,
                    right: '0px',
                    transformOrigin: 'right',
                    boxShadow: '0 8px 24px -8px rgba(204,124,0,0.3)',
                    animationName: hover3,
                    animationDuration: '4000ms',
                    animationIterationCount: 'infinite',
                    animationFillMode: 'backwards',
                    animationTimingFunction: 'ease-in-out',
                    animationDelay: '1800ms',
                    objectFit: 'cover',
                  }}
                />
                <Image
                  src={imgBlank}
                  alt=""
                  sx={{
                    borderRadius: 24,
                    position: 'absolute',
                    height: 395,
                    width: '456px',
                    top: 0,
                    left: '50%',
                    transform: 'scale(0.95) translateX(-50%)',
                    boxShadow: '0 16px 36px -2px rgba(40,40,120,0.3)',
                    animationName: hover2,
                    animationDuration: '4000ms',
                    animationIterationCount: 'infinite',
                    animationFillMode: 'backwards',
                    animationTimingFunction: 'ease-in-out',
                    animationDelay: '900ms',
                    objectFit: 'cover',
                  }}
                />
                <Image
                  src={imgProjectsThumb}
                  alt=""
                  sx={{
                    height: 395,
                    borderRadius: 24,
                    position: 'absolute',
                    zIndex: 1,
                    boxShadow: '0 24px 48px -14px rgba(120,0,0,0.3)',
                    animationName: hover1,
                    animationDuration: '4000ms',
                    animationIterationCount: 'infinite',
                    animationFillMode: 'backwards',
                    animationTimingFunction: 'ease-in-out',
                    objectFit: 'cover',
                  }}
                />
                {/* </LazyLoader> */}
              </div>
            </div>
          </Flex>
        </ContentWrap>
      </ContentBlock>
      <ContentBlock
        sx={{
          bg: 'neutral.9',
        }}
      >
        <ContentWrap
          sx={{
            alignItems: 'center',
          }}
        >
          <Flex sx={{ alignItems: 'center' }}>
            <div
              sx={{
                pr: 6,
                width: '50%',
              }}
            >
              {/* <Image src="https://miro.medium.com/max/2700/1*sqDbrZn3Xrtu6NQh5iXCsQ.png" /> */}
              <Image src={imgCode} />
            </div>
            <div
              sx={{
                pl: 6,
                width: '50%',
              }}
            >
              <Heading as="h3" sx={{ mb: 4 }}>
                Developer tools
              </Heading>
              <Paragraph sx={{ mb: 6, maxWidth: 'contentSmall' }}>
                I write a lot of code. Sometimes I write something useful. Take
                a look. Perhaps you'll find it useful too.
              </Paragraph>

              <Button to={routeUrls.tools} sx={{ alignSelf: 'center' }}>
                Go to tools
              </Button>
            </div>
          </Flex>
        </ContentWrap>
      </ContentBlock>
      <ContentBlock>
        <ContentWrap>
          <Heading as="h3" sx={{ mb: 7 }}>
            Recent posts
          </Heading>
          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridGap: '64px 48px',
              mb: 7,
            }}
          >
            {posts.slice(0, 3).map((post) => (
              <LinkCard to={`${routeUrls.post}/${post.slug}`} key={post.slug}>
                <Image
                  src={post.thumbSrc}
                  sx={{
                    height: 200,
                    objectFit: 'cover',
                    width: '100%',
                    borderRadius: '8px',
                    mb: 4,
                  }}
                />

                <PostCardHeading variant="heading5">
                  {post.title}
                </PostCardHeading>
                <Paragraph variant="bodySmall" sx={{ mb: 3 }}>
                  {post.description}
                </Paragraph>
                <Flex sx={{ color: 'neutral.7' }}>
                  <PostCardTag to="">{post.tag}</PostCardTag>
                  <Text variant="detail" sx={{ ml: 4 }}>
                    {isoDateStringToLabel(post.createdAt)}
                  </Text>
                  <Text variant="detail" sx={{ ml: 4 }}>
                    {post.readingLength}
                  </Text>
                </Flex>
              </LinkCard>
            ))}
          </div>
          <div sx={{ textAlign: 'center', mt: 3, mb: 6 }}>
            <ButtonText to={routeUrls.blog}>Browse all posts</ButtonText>
          </div>
        </ContentWrap>
      </ContentBlock>
    </PageWithFooter>
  );
};

Home.defaultProps = {
  posts: [],
};

export default Home;
