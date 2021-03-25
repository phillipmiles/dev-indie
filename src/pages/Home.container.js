/** @jsx jsx */
import { jsx } from 'theme-ui';
import Home from './Home';
import posts from '../posts/posts.js';
// import { useEffect } from 'react';

// const processedPosts =

const HomeContainer = () => {
  return <Home posts={posts} />;
};

export default HomeContainer;
