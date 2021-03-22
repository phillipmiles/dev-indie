/** @jsx jsx */
import { jsx } from 'theme-ui';

import About from './About';

export default {
  title: 'Pages/About',
  component: About,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <About {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
