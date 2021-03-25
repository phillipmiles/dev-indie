import React from 'react';

import ButtonText from './ButtonText';

export default {
  title: 'Components/ButtonText',
  component: ButtonText,
};

const Template = (args) => <ButtonText {...args}>Button label</ButtonText>;

export const Normal = Template.bind({});
