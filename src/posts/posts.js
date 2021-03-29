import example from './example.md';
import { imgProjectsThumb } from '../assets/assetLoader';

const posts = [
  {
    slug: 'test-post-1',
    title: 'This is a test title that is somewhat long',
    description: 'An example of a short description.',
    createdAt: '2020-06-26T01:11:37.621Z',
    readingLength: '3 minutes',
    tag: 'Tips & Tricks',
    topics: [
      {
        title: 'React',
        count: 12,
      },
      {
        title: 'Thought Stream',
        count: 3,
      },
      {
        title: 'Cryptography',
        count: 3,
      },
    ],
    thumbSrc:
      'https://images.unsplash.com/photo-1616707478468-4b0fa44df4e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
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
    topics: [
      {
        title: 'React',
        count: 12,
      },
      {
        title: 'Thought Stream',
        count: 3,
      },
      {
        title: 'Cryptography',
        count: 3,
      },
    ],
    thumbSrc:
      'https://s3.amazonaws.com/www-inside-design/uploads/2021/03/Womens-History-Month-ID-Bee-Johnson-810x810.jpg',
    content: {
      type: 'text',
      content: example,
    },
  },
  {
    slug: 'test-post-3',
    title: 'This is a test title 2',
    description: 'An example of a short description.',
    createdAt: '2020-06-26T01:11:37.621Z',
    readingLength: '3 minutes',
    tag: 'Tips & Tricks',
    topics: [
      {
        title: 'React',
        count: 12,
      },
      {
        title: 'Thought Stream',
        count: 3,
      },
      {
        title: 'Cryptography',
        count: 3,
      },
      {
        title: 'React',
        count: 12,
      },
      {
        title: 'Thought Stream',
        count: 3,
      },
      {
        title: 'Cryptography',
        count: 3,
      },
      {
        title: 'React',
        count: 12,
      },
      {
        title: 'Thought Stream',
        count: 3,
      },
      {
        title: 'Cryptography',
        count: 3,
      },
    ],
    thumbSrc: imgProjectsThumb,
    content: {
      type: 'text',
      content: example,
    },
  },
];

export default posts;
