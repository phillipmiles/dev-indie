/** @jsx jsx */
import { jsx } from 'theme-ui';
import NavItem from './NavItem';
import routeUrls from '../router/routeUrls';
import Image from './Image';
import {
  imgLogoFull,
  imgLogoBlack,
  imgLogoPrimary,
  imgLogoWhite,
} from '../assets/assetLoader';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from './Link';

const Nav = ({ invert, logoVariant }) => {
  const textColor = invert ? 'white' : 'black';

  return (
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: [4, 6],
        py: 3,
      }}
    >
      <Link to={routeUrls.home} sx={{ flexShrink: 0 }}>
        <Image
          src={
            invert
              ? logoVariant === 'full'
                ? imgLogoFull
                : imgLogoWhite
              : logoVariant === 'primary'
                ? imgLogoPrimary
                : imgLogoBlack
          }
          alt="Dev Indie logo"
          sx={{ height: [64, 64] }}
        />
      </Link>
      <div>
        <NavItem to={routeUrls.blog} sx={{ px: 3, color: textColor }}>
          Blog
        </NavItem>
        <NavItem to={routeUrls.projects} sx={{ px: 3, color: textColor }}>
          Projects
        </NavItem>
        <NavItem to={routeUrls.about} sx={{ px: 3, color: textColor }}>
          About
        </NavItem>
        <FontAwesomeIcon
          icon={faTwitter}
          size="1x"
          sx={{ mx: 3, color: textColor }}
        />
        <FontAwesomeIcon icon={faGithub} sx={{ ml: 3, color: textColor }} />
      </div>
    </nav>
  );
};

Nav.propTypes = {
  invert: PropTypes.bool,
  logoVariant: PropTypes.oneOf(['full', 'simple']),
};

Nav.defaultProps = {
  logoVariant: 'full',
};

// global error handling -
// protected route
export default Nav;
