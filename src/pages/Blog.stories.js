/** @jsx jsx */
import { jsx } from 'theme-ui';

import Blog from './Blog';

export default {
  title: 'Pages/Blog',
  component: Blog,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Blog {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
