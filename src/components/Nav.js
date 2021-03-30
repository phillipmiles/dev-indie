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
import Text from './Text';

const Nav = ({ invert, logoVariant, ...props }) => {
  const textColor = invert ? 'white' : 'black';

  return (
    <nav
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: [4, 6],
        py: 3,
      }}
    >
      <Link to={routeUrls.home} sx={{ flexShrink: 0 }}>
        <Text
          sx={{
            variant: 'text.heading4',
            // fontFamily: 'Filson Soft',
            // fontFamily: 'Proxima Nova Condensed',
            color: invert ? 'white' : 'black',
            // fontWeight: 800,
            // fontFamily: 'Demagogue DEMO',
            letterSpacing: -1,
            fontWeight: 400,
            // fontFamily: 'Clootie DEMO',
            // fontFamily: 'Bunny Daydream DEMO',
            // fontFamily: 'League Spartan',
          }}
        >
          Dev
          <span
            sx={{
              ml: '8px',

              variant: 'text.heading4',
              // fontSize: '32px',
              // fontWeight: 700,
              // fontFamily: 'Clootie DEMO',
              // fontFamily: 'Bunny Daydream DEMO',
              // color: invert ? 'white' : 'primary',
              // fontFamily: 'Demagogue DEMO',
              // fontFamily: 'Sumida Script DEMO',
              // fontFamily: 'Handlee',
              // fontFamily: 'Caveat Brush',
              // fontFamily: 'Neucha',
              // fontFamily: 'LovelexieHandwritten',

              // letterSpacing: -2,
            }}
          >
            Indie
          </span>
        </Text>
        {/* <Image
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
          sx={{ height: [64, 56] }}
        /> */}
      </Link>
      <div sx={{ py: 3 }}>
        <NavItem to={routeUrls.blog} sx={{ px: 4, color: textColor }}>
          Blog
        </NavItem>
        <NavItem to={routeUrls.projects} sx={{ px: 4, color: textColor }}>
          Projects
        </NavItem>
        <NavItem to={routeUrls.about} sx={{ px: 4, color: textColor }}>
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
  logoVariant: PropTypes.oneOf(['full', 'simple']),
};

Nav.defaultProps = {
  logoVariant: 'full',
};

// global error handling -
// protected route
export default Nav;
