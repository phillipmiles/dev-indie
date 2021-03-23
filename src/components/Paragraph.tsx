/** @jsx jsx */
import { jsx } from 'theme-ui';
import { node, oneOf } from 'prop-types';

interface Props {
  variant?: String,
  children?: JSX.Element;
}

const Paragraph = ({ variant, children, ...props }: Props): JSX.Element => {
  return (
    <p {...props} sx={{ variant: `text.${variant || 'body'}` }}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: node,
  variant: oneOf([
    'body',
    'callout',
    'detail',
  ]),
};

export default Paragraph;