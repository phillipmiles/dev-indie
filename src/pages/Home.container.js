/** @jsx jsx */
import { jsx } from 'theme-ui';
import Home from './Home';
import HomeAlt from './HomeAlt';
import HomeAltAlt from './HomeAltAlt';
import posts from '../posts/posts.js';
// import { useEffect } from 'react';

// const processedPosts =

const HomeContainer = () => {
  return <HomeAltAlt posts={posts} />;
};

export default HomeContainer;
