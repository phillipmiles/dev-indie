/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';

const Image = ({ src, alt, ...props }) => {
  return (
    <img
      {...props}
      sx={{
        margin: 0,
        minWidth: 0,
        maxWidth: '100%',
        height: 'auto',
      }}
      src={src}
      alt={alt ? alt : ''}
    />
  );
};

Image.propTypes = {
  /** URL */
  src: PropTypes.string.isRequired,

  /** alt text */
  alt: PropTypes.string,
};

export default Image;
