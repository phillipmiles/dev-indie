/** @jsx jsx */
import { jsx } from 'theme-ui';
import Input from './Input';

export default {
  title: 'Forms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} id="example" type="text" />;

export const Normal = Template.bind({});

export const Disabled = Template.bind({});

export const Placeholder = Template.bind({});

Normal.args = {
  variant: 'callout',
  value: 'This is some text',
};

Disabled.args = {
  disabled: true,
  value: 'This is some text',
};

Placeholder.args = {
  placeholder: 'This is placeholder text',
};
