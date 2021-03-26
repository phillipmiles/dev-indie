/** @jsx jsx */
import { jsx } from 'theme-ui';
import ContentWrap from './ContentWrap';
import Nav from './Nav';

interface Props {
  children?: JSX.Element;
  invert: boolean;
  logoVariant: string;
}

const Header = ({
  children,
  invert,
  logoVariant,
  ...props
}: Props): JSX.Element => (
  <header
    {...props}
    sx={{
      bg: 'primary',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Nav invert={invert} logoVariant={logoVariant} />

    <ContentWrap sx={{ flexGrow: 1 }}>{children}</ContentWrap>
  </header>
);

Header.defaultProps = {
  invert: true,
  logoVariant: 'full',
};

export default Header;
