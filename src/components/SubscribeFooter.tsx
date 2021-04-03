/** @jsx jsx */
import { jsx } from 'theme-ui';
import Footer from './Footer';
import SubscribeContentBlock from './SubscribeContentBlock';

const SubscribeFooter = (props: unknown): JSX.Element => (
  <div {...props}>
    <SubscribeContentBlock />
    <Footer />
  </div>
);

export default SubscribeFooter;
