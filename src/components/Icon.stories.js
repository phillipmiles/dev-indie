/** @jsx jsx */
import { jsx } from 'theme-ui';
import Icon from './Icon';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
  title: 'Components/Icon',
  component: Icon,
};


const Template = (args) => <Icon {...args} />;


export const Normal = Template.bind({});

Normal.args = {
  icon: faTwitter
};