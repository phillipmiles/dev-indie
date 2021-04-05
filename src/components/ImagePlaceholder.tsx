/** @jsx jsx */
import { jsx } from 'theme-ui';

const ImagePlaceholder = (props: unknown): JSX.Element => (
  <div sx={{ width: '100%', height: '100%', bg: 'neutral.8' }} {...props} />
);

export default ImagePlaceholder;
