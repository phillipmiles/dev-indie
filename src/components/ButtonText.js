/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import Link from './Link';

const ButtonText = ({ ...props }) => {
  return (
    <Link
      {...props}
      sx={{
        color: 'primary',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'primary',
        textDecoration: 'none',
      }}
    />
  );
};

ButtonText.propTypes = {};

export default ButtonText;
