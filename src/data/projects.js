import { imgProjectsThumb, imgBlank } from '../assets/assetLoader';

const projects = [
  {
    slug: 'thought-stream',
    title: 'Thought Stream',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros velit, sollicitudin vel gravida sit amet, gravida eget sapien. Proin tellus lorem, rhoncus eu pharetra non, dapibus a nisl. Fusce aliquam nisi ut nunc suscipit sollicitudin.',
    stack: ['React Native'],
    platforms: ['android'],
    srcThumb: imgProjectsThumb,
  },
  {
    slug: 'dev-indie',
    title: 'Dev Indie',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros velit, sollicitudin vel gravida sit amet, gravida eget sapien. Proin tellus lorem, rhoncus eu pharetra non, dapibus a nisl. Fusce aliquam nisi ut nunc suscipit sollicitudin.',
    stack: ['React'],
    platforms: ['web'],
    srcThumb: imgBlank,
  },
  {
    slug: 'story-forks',
    title: 'Story Forks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros velit, sollicitudin vel gravida sit amet, gravida eget sapien. Proin tellus lorem, rhoncus eu pharetra non, dapibus a nisl. Fusce aliquam nisi ut nunc suscipit sollicitudin.',
    stack: ['React', 'Google Firebase'],
    platforms: ['web'],
    srcThumb: imgBlank,
  },
];

export default projects;
