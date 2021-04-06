/** @jsx jsx */
import { jsx } from 'theme-ui';

interface Props {
  children: JSX.Element | Array<JSX.Element> | string;
}
const ContentBlock = ({ children, ...props }: Props): JSX.Element => (
  <div sx={{ py: 8 }} {...props}>
    {children}
  </div>
);

export default ContentBlock;
