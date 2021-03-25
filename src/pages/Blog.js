/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Nav from '../components/Nav';

const Blog = ({ posts }) => {
  return (
    <div>
      <div>
        <Nav />
        <h1>Blog</h1>
        <Paragraph>Paragraph</Paragraph>
        {posts.map((post) => (
          <div key={post.slug}>
            <Paragraph>{post.title}</Paragraph>
            <Link to={`blog/${post.slug}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

Blog.propTypes = {
  posts: PropTypes.array,
};

export default Blog;
