/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import Image from './Image';

const PostCardImage = ({ src, ...props }) => (
  <Image
    {...props}
    src={src}
    sx={{
      height: 280,
      objectFit: 'cover',
      width: '100%',
      borderRadius: '6px',
      mb: 4,
    }}
  />
);

PostCardImage.propTypes = {
  src: PropTypes.string,
};

export default PostCardImage;
