import example from './example.md';

const posts = [{
  slug: 'test-post-1',
  title: 'This is a test title',
  description: 'An example of a short description.',
  content: {
    type: 'text',
    content: example,
  },
}, {
  slug: 'test-post-2',
  title: 'This is a test title 2',
  description: 'An example of a short description.',
  content: {
    type: 'text',
    content: example,
  },
}];

export default posts;