/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import Text from './Text';
import Link from './Link';

const PostCardTag = ({ children, ...props }) => (
  <Link
    to=""
    sx={{
      mb: 2,
      display: 'inline-block',
      color: 'primary',
      ':hover': {
        textDecoration: 'underline',
      },
    }}
  >
    <Text {...props} variant="detail">
      {children}
    </Text>
  </Link>
);

PostCardTag.propTypes = {
  children: PropTypes.string,
};

export default PostCardTag;
