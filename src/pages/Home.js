/** @jsx jsx */
import { jsx, Flex, Input } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import Nav from '../components/Nav';
import ContentWrap from '../components/ContentWrap';
import Image from '../components/Image';
import { imgHomeHero, imgProjectsThumb } from '../assets/assetLoader';
import ButtonText from '../components/ButtonText';
import routeUrls from '../router/routeUrls';
import PostListItem from '../components/PostListItem';
import SubscribeForm from '../components/SubscribeForm';
import SubscribeContentBlock from '../components/SubscribeContentBlock';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = ({ posts }) => {
  return (
    <div>
      <Header
        sx={{
          bg: 'primary',
          background: 'linear-gradient(0deg, #004b95, #0075db, #0080ed)',
          color: 'white',
          overflow: 'hidden',
          minHeight: 800,
        }}
      >
        <Flex sx={{ flexGrow: 1 }}>
          <div
            sx={{
              width: '44%',
              position: 'relative',
            }}
          >
            <Image
              src={imgHomeHero}
              alt=""
              sx={{
                position: 'absolute',
                top: -16,
                right: 0,
                height: '112%',
              }}
            />
          </div>
          <div
            sx={{
              width: '56%', //bg: 'red',
              pb: 150,
              pt: 8,
            }}
          >
            <Heading as="h1" sx={{ mb: 5 }}>
              I'm making
              <br /> apps, somehow.
            </Heading>
            <Paragraph variant="callout" sx={{ mb: 6 }}>
              Learn from my many mistakes by subscribing to the Dev Indie
              newsletter.
            </Paragraph>
            <SubscribeForm />
          </div>
        </Flex>
      </Header>
      <ContentWrap sx={{ mt: 8 }}>
        <Flex
          sx={{ bg: 'neutral.8', borderRadius: 24, overflow: 'hidden', mb: 8 }}
        >
          <Image src={imgProjectsThumb} sx={{ width: '50%' }} alt="" />
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
                Take a look at detailed breakdowns for each of my apps. See how
                they’re progressing and what decision’s I’m making in developing
                them.
              </Paragraph>
            </div>
            <ButtonText to={routeUrls.projects} sx={{ alignSelf: 'flex-end' }}>
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
            to={`${routeUrls.post(post.slug)}`}
            sx={{ mb: [6, 7] }}
          />
        ))}
        <div sx={{ textAlign: 'center', mt: 3, mb: 9 }}>
          <ButtonText>Browse all posts</ButtonText>
        </div>
      </ContentWrap>
      <SubscribeContentBlock />
      <Footer />
    </div>
  );
};

Home.defaultProps = {
  posts: [],
};

export default Home;
