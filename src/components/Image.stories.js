/** @jsx jsx */
import { jsx } from 'theme-ui';
import Image from './Image';
import logo from '../assets/brand/logo/logo-black.png';

export default {
  title: 'Components/Image',
  component: Image,
};

export const normal = () => <Image src={logo} alt="Logo" />;


