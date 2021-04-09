/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link as RRLink } from 'react-router-dom';

interface Props {
  variant?: string;
  children: JSX.Element | string | Array<JSX.Element>;
  external: boolean;
  to: string;
}

const Link = ({
  children,
  variant,
  external,
  to,
  ...props
}: Props): JSX.Element => {
  if (external) {
    return (
      <a
        href={to}
        target="blank"
        sx={variant && { variant: `text.${variant}` }}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <RRLink to={to} sx={variant && { variant: `text.${variant}` }} {...props}>
        {children}
      </RRLink>
    );
  }
};

Link.defaultProps = {
  external: false,
};

export default Link;
