import example from './example.md';
import { imgProjectsThumb } from '../assets/assetLoader';

const posts = [
  {
    slug: 'test-post-1',
    title: 'This is a test title',
    description: 'An example of a short description.',
    createdAt: '2020-06-26T01:11:37.621Z',
    readingLength: '3 minutes',
    tag: 'Tips & Tricks',
    thumbSrc: imgProjectsThumb,
    content: {
      type: 'text',
      content: example,
    },
  },
  {
    slug: 'test-post-2',
    title: 'This is a test title 2',
    description: 'An example of a short description.',
    createdAt: '2020-06-26T01:11:37.621Z',
    readingLength: '3 minutes',
    tag: 'Tips & Tricks',
    thumbSrc: imgProjectsThumb,
    content: {
      type: 'text',
      content: example,
    },
  },
];

export default posts;
