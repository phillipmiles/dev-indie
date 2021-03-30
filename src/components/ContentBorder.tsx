/** @jsx jsx */
import { jsx } from 'theme-ui';

interface Props {
  children?: JSX.Element;
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
}

const ContentBorder = ({
  children,
  top,
  left,
  right,
  bottom,
  ...props
}: Props): JSX.Element => {
  return (
    <div
      {...props}
      sx={{
        borderWidth: '20px',
        borderColor: 'primaryLight',
        borderTopStyle: top ? 'solid' : 'none',
        borderLeftStyle: left ? 'solid' : 'none',
        borderRightStyle: right ? 'solid' : 'none',
        borderBottomStyle: bottom ? 'solid' : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default ContentBorder;
