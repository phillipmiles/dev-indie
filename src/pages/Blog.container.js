/** @jsx jsx */
import { jsx } from 'theme-ui';
import BlogAlt from './BlogAlt';
import posts from '../posts/posts.js';

const BlogContainer = () => {
  console.log(posts);
  return <BlogAlt posts={posts} />;
};

export default BlogContainer;
