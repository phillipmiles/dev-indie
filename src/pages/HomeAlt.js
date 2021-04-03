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

const Home = ({ posts }) => {
  return (
    <div>
      <ContentBorder
      //left right
      >
        <header
          sx={{
            // bg: 'primary',
            display: 'flex',
            flexDirection: 'column',

            // bg: 'primaryLight',
            // background: 'linear-gradient(0deg, #004b95, #0075db, #0080ed)',
            // background: 'linear-gradient(0deg, white,  #59B3FF)',
            // color: 'white',

            minHeight: 756,
          }}
        >
          <Nav
          // sx={{ bg: 'white' }}
          // invert // logoVariant={logoVariant}
          />

          <ContentWrap
            maxWidth={1280}
            sx={{
              mx: 4,
              overflow: 'hidden',
              flexGrow: 1,
              bg: 'primary',
              // background: 'linear-gradient(0deg, #004b95, #0075db,  #0080ed)',
              background: 'linear-gradient(0deg, #0075db,  #0080ed)',
              borderRadius: '256px 6px',
            }}
          >
            {/* <Header
              sx={{
                bg: 'primaryLight',
                // background: 'linear-gradient(0deg, #004b95, #0075db, #0080ed)',
                color: 'white',
                overflow: 'hidden',
                minHeight: 800,
              }}
            > */}
            <Flex
              sx={{
                flexGrow: 1,
                // bg: 'primary',
                mt: 5,
                // px: 6,
                color: 'white',
                // borderRadius: 24,
              }}
            >
              <div
                sx={{
                  width: '44%',
                  position: 'relative',
                  // overflow: 'hidden',
                }}
              >
                {/* <Image
                  src={imgAvatar}
                  alt=""
                  sx={{
                    // position: 'absolute',
                    top: -16,
                    marginTop: 7,
                    right: 0,
                    width: 412,
                    // height: '112%',
                    // borderWidth: '4px',
                    // borderStyle: 'solid',
                    // borderColor: 'primaryLight',
                    maxWidth: 'none',
                    borderRadius: '100%',
                  }}
                /> */}
                <Image
                  src={imgHomeHero}
                  alt=""
                  sx={{
                    position: 'absolute',
                    top: -16,
                    right: 64,
                    height: '112%',
                    maxWidth: 'none',
                  }}
                />
              </div>
              <div
                sx={{
                  width: '56%', //bg: 'red',
                  pb: 128,
                  pt: 8,
                }}
              >
                <Heading as="h1" sx={{ mb: 5 }}>
                  I'm making
                  <br /> apps... somehow
                </Heading>
                <Paragraph variant="callout" sx={{ mb: 6 }}>
                  Learn from my many mistakes by subscribing to the Dev Indie
                  newsletter.
                </Paragraph>
                <SubscribeForm shadow />
                {/* <div>
                  <Flex sx={{ mb: 3, flexDirection: ['column', 'row'] }}>
                    <Input
                      placeholder="Enter your email"
                      sx={{
                        // boxShadow: '0 2px 4px 0 #006ECC',
                        // borderWidth: '2px',
                        // borderColor: 'primary',
                        // borderStyle: 'solid',
                        mr: [0, 2],
                        mb: ['12px', 0],
                        textAlign: ['center', 'left'],
                      }}
                    />
                    <button
                      sx={{
                        borderRadius: 32,
                        height: 56,
                        bg: 'secondary',

                        // boxShadow: '0 2px 4px 0 #006ECC',

                        outline: 'none',
                        border: 'none',
                        // borderWidth: '1px',
                        // borderColor: 'primary',
                        // borderStyle: 'solid',
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
                    sx={{ textAlign: 'center', display: 'block' }}
                  >
                    Unsubscribe at <span sx={{ fontStyle: 'italic' }}>any</span>{' '}
                    time
                  </Text>
                </div> */}
              </div>
            </Flex>
            {/* </Header> */}
          </ContentWrap>
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
