/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';

const Blog = () => {
  return (
    <div>
      <div>
        <h1>Blog</h1>
        <Paragraph>Paragraph</Paragraph>
      </div>
    </div>
  );
};

Blog.propTypes = {};

export default Blog;
