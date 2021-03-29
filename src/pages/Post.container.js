/** @jsx jsx */
import { jsx } from 'theme-ui';
import Post from './Post';
import PostAlt from './PostAlt';
import PostAltAlt from './PostAltAlt';
import { useParams } from 'react-router-dom';
import posts from '../posts/posts';

const isoDateStringToLabel = (isoDateString) => {
  const date = new Date(isoDateString);
  const todaysDate = new Date();
  const yesterdaysDate = new Date();

  yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);

  if (
    date.getDate() === todaysDate.getDate() &&
    date.getMonth() === todaysDate.getMonth() &&
    date.getFullYear() === todaysDate.getFullYear()
  ) {
    return 'Today';
  } else if (
    date.getDate() === yesterdaysDate.getDate() &&
    date.getMonth() === yesterdaysDate.getMonth() &&
    date.getFullYear() === yesterdaysDate.getFullYear()
  ) {
    return 'Yesterday';
  } else {
    return date.toDateString();
  }
};

const PostContainer = () => {
  let { id } = useParams();

  const post = posts.find((post) => post.slug == id);
  // console.log(post.content);

  console.log('time', post.createdAt);
  console.log('time processed', isoDateStringToLabel(post.createdAt));
  return (
    <Post
      title={post.title}
      content={post.content}
      tag={post.tag}
      topics={post.topics}
      thumbSrc={post.thumbSrc}
      timePublished={isoDateStringToLabel(post.createdAt)}
      readingLength={post.readingLength}
    />
  );
};

export default PostContainer;
