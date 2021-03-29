/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const FontAwesomeIcon = ({ icon, ...props }) => {
  return <FAIcon {...props} icon={icon} size="1x" />;
};

export default FontAwesomeIcon;
