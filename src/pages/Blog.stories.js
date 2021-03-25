/** @jsx jsx */
import { jsx } from 'theme-ui';
import { imgProjectsThumb } from '../assets/assetLoader';

import Blog from './Blog';

export default {
  title: 'Pages/Blog',
  component: Blog,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Blog {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  posts: [
    {
      title: 'Hello world',
      description: 'Hello to you too.',
      thumbSrc: imgProjectsThumb,
      slug: 'article-1',
      tag: 'Tips & Tricks',
      timePublished: 'Oct 23rd, 2020',
      readingLength: '3 minutes',
    },
  ],
};
