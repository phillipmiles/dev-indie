/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from './Link';

const ButtonText = ({ children, ...props }) => {
  return (
    <Link
      sx={{
        variant: 'text.detail',
        fontWeight: 700,
        bg: 'primary',
        color: 'white',
        borderRadius: '4px',
        px: 4,
        py: 3,
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonText;
