/** @jsx jsx */
import { jsx } from 'theme-ui';
import NavItem from './NavItem';
import routeUrls from '../router/routeUrls';
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavItem to={routeUrls.home}>Home</NavItem>
        </li>
        <li>
          <NavItem to={routeUrls.blog}>Blog</NavItem>
        </li>
        <li>
          <NavItem to={routeUrls.projects}>Projects</NavItem>
        </li>
        <li>
          <NavItem to={routeUrls.about}>About</NavItem>
        </li>
      </ul>
    </nav>
  );
};

// global error handling -
// protected route
export default Nav;
