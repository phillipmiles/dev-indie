/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import Link from './Link';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, onClick, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      sx={{ textDecoration: 'none' }}
      activeStyle={{ textDecoration: 'underline' }}
    ></NavLink>
  );
};

NavItem.propTypes = {
  onClick: PropTypes.func,
  /** A route URL string that if passed will replace the onClick function with a function that
   * triggers a page route to the passed in url.
   */
  to: PropTypes.string,
};

export default NavItem;
