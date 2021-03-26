/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Heading from '../components/Heading';
import Header from '../components/Header';
import PostListItem from '../components/PostListItem';
import routeUrls from '../router/routeUrls';
import ContentWrap from '../components/ContentWrap';
import SubscribeContentBlock from '../components/SubscribeContentBlock';
import Footer from '../components/Footer';

const Blog = ({ posts }) => {
  return (
    <div>
      <Header sx={{ color: 'white', minHeight: 500 }}>
        <Flex
          sx={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            flexDirection: 'column',
            pb: 7,
          }}
        >
          <Heading as="h1" variant="heading2">
            Blog
          </Heading>
        </Flex>
      </Header>
      <ContentWrap sx={{ mt: 8, mb: 9 }}>
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
      </ContentWrap>
      <SubscribeContentBlock />
      <Footer />
    </div>
  );
};

Blog.propTypes = {
  posts: PropTypes.array,
};

export default Blog;
