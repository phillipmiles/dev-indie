/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import LazyLoad from 'react-lazyload';
import ImagePlaceholder from './ImagePlaceholder';

// See react-lazyload documentation for additional properties...
// https://www.npmjs.com/package/react-lazyload
const LazyLoader = ({
  placeholder,
  height,
  offset,
  once,
  children,
  ...props
}) => (
  <LazyLoad
    sx={{
      bg: 'neutral.9',
    }}
    height={height}
    offset={offset ? offset : 500}
    once={once}
    placeholder={placeholder ? placeholder : <ImagePlaceholder />}
    {...props}
  >
    {children}
  </LazyLoad>
);

LazyLoader.propTypes = {
  /** Expected height of component for first render cycle only. */
  height: PropTypes.number.isRequired,

  /** Scroll distance above this component at which point loading of content
   * be triggered  */
  offset: PropTypes.number,
  once: PropTypes.bool,
  children: PropTypes.node,
};

export default LazyLoader;
