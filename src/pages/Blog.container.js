/** @jsx jsx */
import { jsx } from 'theme-ui';
import Blog from './Blog';
import posts from '../posts/posts.js';

const BlogContainer = () => {
  console.log(posts);
  return <Blog posts={posts} />;
};

export default BlogContainer;
