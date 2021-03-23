/** @jsx jsx */
import { jsx } from 'theme-ui';
import Nav from './Nav';


export default {
  title: 'Components/Nav',
  component: Nav,
};

const Template = (args) => <Nav {...args} />;


export const Normal = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  invert: true,
};