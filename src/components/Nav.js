/** @jsx jsx */
import { jsx } from 'theme-ui';
import NavItem from './NavItem';
import routeUrls from '../router/routeUrls';
import Image from './Image';
import { imgLogoTest2 } from '../assets/assetLoader';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from './Link';

const Nav = ({ invert, ...props }) => {
  const textColor = invert ? 'white' : 'black';

  return (
    <nav
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: [4, 7],
        py: 3,
        // position: 'fixed',
        // left: 0,
        // right: 0,
        // top: 0,
        // zIndex: 100,
        // bg: 'white',
      }}
    >
      <Link to={routeUrls.home} sx={{ flexShrink: 0 }}>
        <Image src={imgLogoTest2} alt="Dev Indie logo" sx={{ height: 36 }} />
      </Link>
      <div sx={{ py: 3 }}>
        <NavItem to={routeUrls.projects} sx={{ mx: 4, color: textColor }}>
          Projects
        </NavItem>
        <NavItem to={routeUrls.blog} sx={{ mx: 4, color: textColor }}>
          Dev tools
        </NavItem>
        <NavItem to={routeUrls.blog} sx={{ mx: 4, color: textColor }}>
          Blog
        </NavItem>
        <NavItem to={routeUrls.about} sx={{ mx: 4, color: textColor }}>
          About
        </NavItem>
        <FontAwesomeIcon
          icon={faTwitter}
          size="1x"
          sx={{ mx: 4, color: textColor }}
        />
        <FontAwesomeIcon icon={faGithub} sx={{ ml: 2, color: textColor }} />
      </div>
    </nav>
  );
};

Nav.propTypes = {
  invert: PropTypes.bool,
};

Nav.defaultProps = {
  invert: false,
};

export default Nav;
