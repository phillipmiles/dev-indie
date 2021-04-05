/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import Link from './Link';

const LinkCard = ({ children, to, ...props }) => {
  return (
    <Link
      to={to}
      sx={{
        position: 'relative',
        display: 'block',

        '::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          opacity: 0,
          boxShadow: 'rgba(0, 0, 0, 0.15) 0px 4px 30px',
          transitionProperty: 'opacity, transform',
          transitionDuration: '200ms',
          zIndex: -1,
          borderRadius: '8px',
          inset: '-16px -16px',
          transform: 'scale(0.9825)',
        },
        ':hover': {
          '::after': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

LinkCard.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};

export default LinkCard;
