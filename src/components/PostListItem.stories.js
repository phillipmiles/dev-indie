import React from 'react';
import PostListItem from './PostListItem';
import imageThumb from '../assets/projects-thumb.png';

export default {
  title: 'Components/PostListItem',
  component: PostListItem,
};

const Template = (args) => <PostListItem {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  title: 'Hello world',
  imageSrc: imageThumb,
  description:
    'There’s nothing like making the thing that solves all your requirements.',
  tag: 'Tools & Tips',
  timePublished: 'October 13th, 2020',
  readingLength: '13 minutes',
};
