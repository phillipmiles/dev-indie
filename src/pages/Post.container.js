/** @jsx jsx */
import { jsx } from 'theme-ui';
import Post from './Post';
import { useParams } from "react-router-dom";
import posts from '../posts/index';

const PostContainer = () => {
  let { id } = useParams();

  const post = posts.find(post => post.slug == id);
  console.log(post.content)


  return <Post title={post.title} content={post.content} />;
};

export default PostContainer;
