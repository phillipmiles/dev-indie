/** @jsx jsx */
import { jsx } from 'theme-ui';
import NavItem from './NavItem';
import routeUrls from '../router/routeUrls';
import Image from './Image';
import logo from '../assets/brand/logo/logo-full.png';
import logoBlack from '../assets/brand/logo/logo-black.png';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const Nav = ({ invert }) => {
  const textColor = invert ? 'white' : 'black';

  return (
    <nav sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 6, py: 3 }}>
      <Image src={invert ? logo : logoBlack} alt="Dev Indie logo" sx={{ width: 108 }} />
      <div>
        <NavItem to={routeUrls.blog} sx={{ px: 3, color: textColor }}>Blog</NavItem>
        <NavItem to={routeUrls.projects} sx={{ px: 3, color: textColor }}>Projects</NavItem>
        <NavItem to={routeUrls.about} sx={{ px: 3, color: textColor }}>About</NavItem>
        <FontAwesomeIcon icon={faTwitter} size="1x" sx={{ mx: 3, color: textColor }} />
        <FontAwesomeIcon icon={faGithub} sx={{ ml: 3, color: textColor }} />
      </div>
    </nav>
  );
};

Nav.propTypes = {
  invert: PropTypes.bool,
}

// global error handling -
// protected route
export default Nav;
