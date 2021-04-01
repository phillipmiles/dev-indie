/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from 'theme-ui';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      sx={{ textDecoration: 'none', py: 1 }}
      activeStyle={{
        // textDecoration: 'underline',
        fontWeight: 'bold',
        // '& span': {
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        // },
      }}
    >
      {children}
    </NavLink>
  );
};

NavItem.propTypes = {
  /** A route URL string that if passed will replace the onClick function with a function that
   * triggers a page route to the passed in url.
   */
  to: PropTypes.string,
  children: PropTypes.node,
};

export default NavItem;
