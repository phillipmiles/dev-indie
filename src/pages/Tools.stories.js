/** @jsx jsx */
import { jsx } from 'theme-ui';

import Tools from './Tools';

export default {
  title: 'Pages/Tools',
  component: Tools,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Tools {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
