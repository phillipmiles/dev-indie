import example from './example.md';
import example2 from './example2.md';
import { imgProjectsThumb } from '../assets/assetLoader';

const posts = [
  {
    slug: 'test-post-1',
    title: 'How to increase your team’s productivity when stakes are high',
    description: 'An example of a short description.',
    createdAt: '2020-06-26T01:11:37.621Z',
    readingLength: '3 minutes',
    tag: 'Tips & Tricks',
    type: 'custom',
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
      content: example2,
    },
  },
  {
    slug: 'test-post-2',
    title: 'Adding end-to-end encryption to your app',
    description:
      'Exploring stacking contexts, one of the most misunderstood mechanisms in CSS.',
    createdAt: '2020-06-26T01:11:37.621Z',
    readingLength: '3 minutes',
    tag: 'Tips & Tricks',
    type: 'custom2',
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
      'https://cdn.vox-cdn.com/thumbor/GF6TYwOOhULSBXHmTPLjvz09MpU=/0x0:1920x1080/3070x1727/filters:focal(804x177:1110x483):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69029891/hitman_3_key_art_red_background_1920.0.jpg',
    content: {
      type: 'text',
      content: example2,
    },
  },
  {
    slug: 'test-post-3',
    title: 'In Hitman 3, Agent 47’s freedom is more important than yours',
    description:
      'Exploring stacking contexts, one of the most misunderstood mechanisms in CSS.',
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
      content: example2,
    },
  },
  {
    slug: 'test-post-4',
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
  {
    slug: 'test-post-5',
    title: 'Adding end-to-end encryption to your app',
    description:
      'Exploring stacking contexts, one of the most misunderstood mechanisms in CSS.',
    createdAt: '2020-06-26T01:11:37.621Z',
    readingLength: '3 minutes',
    tag: 'Tips & Tricks',
    type: 'custom2',
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
      'https://uploads-ssl.webflow.com/5e81a08d29502f1024be75a7/5f72f13ad655fd116a911e41_img1.png',
    content: {
      type: 'text',
      content: example2,
    },
  },
  {
    slug: 'test-post-6',
    title: 'Adding end-to-end encryption to your app',
    description:
      'Exploring stacking contexts, one of the most misunderstood mechanisms in CSS.',
    createdAt: '2020-06-26T01:11:37.621Z',
    readingLength: '3 minutes',
    tag: 'Tips & Tricks',
    type: 'custom2',
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
      'https://figma.imgix.net/LcuG2N2IA33kK8Z63TrtJ/23c7adc820fae0b075ec4fa5d301ecfb/BlogHeader-AutoSave.png?&w=2120&auto=compress%2Cformat&crop=entropy&fit=crop&q=75',
    content: {
      type: 'text',
      content: example2,
    },
  },
];

export default posts;
