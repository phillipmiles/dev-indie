/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import ContentWrap from './ContentWrap';
import Nav from './Nav';

interface Props {
  children?: JSX.Element;
  invert: boolean;
}

const Header = ({ children, invert, ...props }: Props): JSX.Element => (
  <header
    {...props}
    sx={{
      bg: 'primary',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Nav invert={invert} />

    <ContentWrap sx={{ flexGrow: 1 }}>{children}</ContentWrap>
  </header>
);

Header.defaultProps = {
  invert: true,
};

export default Header;
