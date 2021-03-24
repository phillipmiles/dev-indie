/** @jsx jsx */
import { jsx } from 'theme-ui';

import Post from './Post';

export default {
  title: 'Pages/Post',
  component: Post,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
