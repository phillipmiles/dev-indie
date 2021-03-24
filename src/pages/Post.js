/** @jsx jsx */
import { jsx } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Nav from '../components/Nav';
import RenderMarkdown from '../components/RenderMarkdown';

const Post = ({ title, content }) => {
  return (
    <div>
      <div>
        <Nav />
        <h1>{title}</h1>
        <Paragraph>Paragraph</Paragraph>
        <RenderMarkdown content={content} />
      </div>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
};

export default Post;
