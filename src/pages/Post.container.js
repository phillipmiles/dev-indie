/** @jsx jsx */
import { jsx } from 'theme-ui';
// import Post from './Post';
// import PostAlt from './PostAlt';
// import PostAltAlt from './PostAltAlt';
import PostAltAltAlt from './PostAltAltAlt';
import PostAltAltAltAlt from './PostAltAltAltAlt';
import PostAltAltAltAltAlt from './PostAltAltAltAltAlt';
import PostRealReal from './PostRealReal';
import PostReal from './PostReal';
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
  const C =
    post.type && post.type === 'custom'
      ? PostReal
      : post.type && post.type === 'custom2'
        ? PostRealReal
        : PostAltAltAltAltAlt;
  return (
    <C
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
