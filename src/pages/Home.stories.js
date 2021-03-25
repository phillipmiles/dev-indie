/** @jsx jsx */
import { jsx } from 'theme-ui';
import Home from './Home';
import { imgProjectsThumb } from '../assets/assetLoader';

export default {
  title: 'Pages/Home',
  component: Home,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Home {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
