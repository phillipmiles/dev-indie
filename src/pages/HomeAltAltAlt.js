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
} from '../assets/assetLoader';
import ButtonText from '../components/ButtonText';
import routeUrls from '../router/routeUrls';
import PostListItem from '../components/PostListItem';
import SubscribeForm from '../components/SubscribeForm';
import SubscribeFooter from '../components/SubscribeFooter';
import Header from '../components/Header';
import LazyLoader from '../components/LazyLoader';
import ContentBorder from '../components/ContentBorder';
import Text from '../components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import PageWithFooter from '../components/generic/PageWithFooter';
import Button from '../components/Button';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes({
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
  // const animProjectImage1 = useSpring({
  //   from: { translateY: -20 },
  //   translateY: 20,
  //   loop: { reverse: true },
  //   config: {
  //     duration: 1000,
  //     //easing: 'd3-ease'
  //   },
  // });

  // const animProjectImage2 = useSpring({
  //   from: { translateY: -20 },
  //   translateY: 20,
  //   loop: { reverse: true },
  //   delay: 200,
  //   config: { duration: 1000 },
  // });
  // const animProjectImage3 = useSpring({
  //   from: { translateY: -20 },
  //   translateY: 20,
  //   loop: { reverse: true },
  //   delay: 400,
  //   config: { duration: 1000 },
  // });

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
                    Learn from my many mistakes by subscribing to the Dev Indie
                    newsletter.
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
                      color: 'neutral.7',
                    }}
                  >
                    <FontAwesomeIcon icon={faReact} size="2x" sx={{ mr: 4 }} />
                    <FontAwesomeIcon icon={faNodeJs} size="2x" />
                  </Flex>
                </div>
              </Flex>
              {/* </Header> */}
            </ContentWrap>
          </Flex>
        </Flex>
      </header>
      <div sx={{ bg: 'neutral.9', mb: 8, mt: 6 }}>
        <ContentWrap sx={{ mt: 8 }}>
          <Flex
            sx={{
              bg: 'neutral.9',
              borderRadius: 24,
              // overflow: 'hidden',
              mb: 8,
            }}
          >
            {/* <Flex
              sx={{
                p: 6,
                pl: 0,
                width: '44%',
                flexDirection: 'column',
                // justifyContent: 'space-between',
              }}
            > */}
            <div sx={{ p: 6, pl: 0, width: '50%' }}>
              <Heading as="h3" sx={{ mb: 4 }}>
                The projects
              </Heading>
              <Paragraph sx={{ mb: 6 }}>
                Take a look at detailed breakdowns for each of my apps. See how
                they’re progressing and what decision’s I’m making in developing
                them.
              </Paragraph>

              <Button to={routeUrls.projects} sx={{ alignSelf: 'flex-start' }}>
                Go to projects
              </Button>
            </div>
            {/* </Flex> */}
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
                {/* <animated.div style={animProjectImage3}> */}
                <Image
                  src={imgBlankYellow}
                  alt=""
                  sx={{
                    borderRadius: 24,
                    // transform: 'rotate(18deg)',
                    position: 'absolute',
                    height: 395,
                    width: '456px',
                    top: 0,
                    right: '0px',
                    transformOrigin: 'right',
                    // transform: 'scale(0.9)',
                    boxShadow: '0 8px 24px -8px rgba(204,124,0,0.3)',
                    animationName: hover3,
                    animationDuration: '4000ms',
                    animationIterationCount: 'infinite',
                    animationFillMode: 'backwards',
                    animationTimingFunction: 'ease-in-out',
                    animationDelay: '1600ms',
                    // boxShadow: '0px 8px 16px -6px rgba(204, 124, 0, 0.5)',
                    // borderTopStyle: 'solid',
                    // borderLeftStyle: 'solid',
                    // borderColor: 'rgba(255,250,220,1)',
                    // borderWidth: '1px',
                    // opacity: 0.4,
                  }}
                />
                {/* </animated.div>
                <animated.div style={animProjectImage2}> */}
                <Image
                  src={imgBlank}
                  alt=""
                  sx={{
                    borderRadius: 24,
                    // transform: 'rotate(8deg)',
                    position: 'absolute',
                    height: 395,
                    width: '456px',
                    top: 0,
                    left: '50%',
                    transform: 'scale(0.95) translateX(-50%)',
                    // right: '-32px',
                    boxShadow: '0 16px 36px -2px rgba(40,40,120,0.3)',
                    animationName: hover2,
                    animationDuration: '4000ms',
                    animationIterationCount: 'infinite',
                    animationFillMode: 'backwards',
                    animationTimingFunction: 'ease-in-out',
                    animationDelay: '800ms',
                    // boxShadow: '0px 8px 20px -6px rgba(0,0,255,0.3)',
                    // borderTopStyle: 'solid',
                    // borderLeftStyle: 'solid',
                    // borderColor: 'rgba(150,200,255,1)',
                    // borderWidth: '1px',
                    // opacity: 0.6,
                  }}
                />
                {/* </animated.div> */}
                {/* <animated.div style={animProjectImage1}> */}
                <Image
                  src={imgProjectsThumb}
                  alt=""
                  sx={{
                    height: 395,
                    borderRadius: 24,
                    position: 'absolute',
                    zIndex: 1,
                    boxShadow: '0 24px 48px -14px rgba(120,0,0,0.3)',
                    animationName: fadeIn,
                    animationDuration: '4000ms',
                    animationIterationCount: 'infinite',
                    animationFillMode: 'backwards',
                    animationTimingFunction: 'ease-in-out',
                    // animationName: slidein;
                    // borderTopStyle: 'solid',
                    // borderLeftStyle: 'solid',
                    // borderRightStyle: 'solid',
                    // borderColor: 'rgba(240,120,150,1)',
                    // borderTopColor: 'rgba(255,140,170,1)',
                    // borderWidth: '1px',
                  }}
                />
                {/* </animated.div> */}
                {/* </LazyLoader> */}
              </div>
            </div>
          </Flex>
        </ContentWrap>
      </div>
      <ContentWrap>
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
    </PageWithFooter>
  );
};

Home.defaultProps = {
  posts: [],
};

export default Home;
