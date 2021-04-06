/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from './Link';

interface Props {
  children: JSX.Element | string | Array<JSX.Element>;
}

const ButtonText = ({ children, ...props }: Props): JSX.Element => {
  return (
    <Link
      sx={{
        variant: 'text.body',
        bg: 'primary',
        color: 'white',
        borderRadius: '32px',
        height: '56px',
        px: 5,
        py: 3,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        transitionTimingFunction: 'ease-in-out',
        transition: 'background-color 250ms',
        ':hover': {
          transition: 'none',
          bg: 'primaryLight',
        },
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonText;
