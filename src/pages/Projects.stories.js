/** @jsx jsx */
import { jsx } from 'theme-ui';

import Projects from './Projects';

export default {
  title: 'Pages/Projects',
  component: Projects,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Projects {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
