/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import Heading from './Heading';

const PostCardHeading = ({ children, ...props }) => (
  <Heading as="h2" variant="heading4" sx={{ mb: 3 }} {...props}>
    {children}
  </Heading>
);

PostCardHeading.propTypes = {
  children: PropTypes.node,
};

export default PostCardHeading;
