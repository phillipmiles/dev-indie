/** @jsx jsx */
import { jsx } from 'theme-ui';
import Tools from './Tools';
import tools from '../data/tools';

const ToolsContainer = () => {
  return <Tools tools={tools} />;
};

export default ToolsContainer;
