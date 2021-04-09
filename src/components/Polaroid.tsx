/** @jsx jsx */
import { jsx } from 'theme-ui';

interface Props {
  children?: string | Array<JSX.Element> | JSX.Element;
}

const Polaroid = ({ children, ...props }: Props): JSX.Element => {
  return (
    <div
      sx={{
        bg: 'white',
        boxShadow:
          '2px 4px 16px -4px rgba(0,0,0,0.2), 8px 16px 64px -16px rgba(0,0,0,0.1)',
        p: 4,
        pb: 8,
        borderRadius: '6px',
      }}
      {...props}
    >
      <div sx={{ bg: 'neutral.9', borderRadius: 6, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
};

export default Polaroid;
