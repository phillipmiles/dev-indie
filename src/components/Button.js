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

        variant: 'text.body',
        borderRadius: '32px',
        height: '56px',
        fontWeight: 400,
        px: 5,
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonText;
