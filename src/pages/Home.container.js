/** @jsx jsx */
import { jsx } from 'theme-ui';
import Home from './Home';
import HomeAlt from './HomeAlt';
import HomeAltAlt from './HomeAltAlt';
import HomeAltAltAlt from './HomeAltAltAlt';
import HomeAltAltAltAlt from './HomeAltAltAltAlt';
import posts from '../posts/posts.js';
// import { useEffect } from 'react';

// const processedPosts =

const HomeContainer = () => {
  return <HomeAltAltAlt posts={posts} />;
};

export default HomeContainer;
