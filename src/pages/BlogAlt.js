/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Heading from '../components/Heading';
import Header from '../components/Header';
import PostListItem from '../components/PostListItem';
import routeUrls from '../router/routeUrls';
import ContentWrap from '../components/ContentWrap';
import SubscribeContentBlock from '../components/SubscribeContentBlock';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ContentBorder from '../components/ContentBorder';
import Image from '../components/Image';
import Text from '../components/Text';
import { isoDateStringToLabel } from '../utils/time';
import LinkCard from '../components/LinkCard';
import PostCardHeading from '../components/PostCardHeading';
import PostCardImage from '../components/PostCardImage';
import PostCardTag from '../components/PostCardTag';

const Blog = ({ posts }) => {
  return (
    <div>
      <header>
        <ContentBorder left right>
          <Nav />
        </ContentBorder>
      </header>
      <ContentBorder left right>
        {/* <Header sx={{ color: 'white', minHeight: 400 }}>
        <Flex
          sx={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            flexDirection: 'column',
            pb: 7,
          }}
        >
          <Heading as="h1" variant="heading2">
            Blog
          </Heading>
        </Flex>
      </Header> */}
        <ContentWrap sx={{ pt: 8, pb: 9 }}>
          <LinkCard
            to={`${routeUrls.post}/${posts[0].slug}`}
            sx={{
              mb: 8,
              display: 'flex',
            }}
          >
            <Image
              src={posts[0].thumbSrc}
              sx={{
                borderRadius: 6,
                objectFit: 'fill',
                width: '56%',
                flexShrink: 0,
                height: 400,
              }}
            />
            <Flex
              sx={{
                pl: 7,
                pr: 3,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <PostCardTag to="">{posts[0].tag}</PostCardTag>

              <Heading as="h2" variant="heading3" sx={{ mb: 4 }}>
                {posts[0].title}
              </Heading>

              <Paragraph>{posts[0].description}</Paragraph>
              <Flex sx={{ color: 'neutral.7' }}>
                <Text variant="detail" sx={{}}>
                  {isoDateStringToLabel(posts[0].createdAt)}
                </Text>
                <Text variant="detail" sx={{ ml: 4 }}>
                  {posts[0].readingLength}
                </Text>
              </Flex>
            </Flex>
          </LinkCard>
          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '64px 64px',
              mb: 8,
            }}
          >
            <LinkCard to={`${routeUrls.post}/${posts[1].slug}`}>
              <PostCardImage src={posts[1].thumbSrc} />
              <PostCardTag to="">{posts[1].tag}</PostCardTag>
              <Heading as="h2" variant="heading4" sx={{ mt: 2, mb: 4 }}>
                {posts[1].title}
              </Heading>
              <Paragraph sx={{ mb: 4 }}>{posts[1].description}</Paragraph>
              <Flex sx={{ color: 'neutral.7' }}>
                <Text variant="detail" sx={{}}>
                  {isoDateStringToLabel(posts[1].createdAt)}
                </Text>
                <Text variant="detail" sx={{ ml: 4 }}>
                  {posts[1].readingLength}
                </Text>
              </Flex>
            </LinkCard>
            <LinkCard to={`${routeUrls.post}/${posts[2].slug}`}>
              <PostCardImage src={posts[2].thumbSrc} />
              <PostCardTag to="">{posts[2].tag}</PostCardTag>
              <PostCardHeading>{posts[2].title}</PostCardHeading>
              <Paragraph sx={{ mb: 4 }}>{posts[2].description}</Paragraph>
              <Flex sx={{ color: 'neutral.7' }}>
                <Text variant="detail" sx={{}}>
                  {isoDateStringToLabel(posts[2].createdAt)}
                </Text>
                <Text variant="detail" sx={{ ml: 4 }}>
                  {posts[2].readingLength}
                </Text>
              </Flex>
            </LinkCard>
          </div>
          <div
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridGap: '64px 48px',
              mb: 7,
            }}
          >
            {posts.slice(3).map((post) => (
              <LinkCard to={`${routeUrls.post}/${post.slug}`} key={post.slug}>
                <Image
                  src={post.thumbSrc}
                  sx={{
                    height: 200,
                    objectFit: 'cover',
                    width: '100%',
                    borderRadius: '8px',
                    mb: 3,
                  }}
                />
                <PostCardTag to="">{post.tag}</PostCardTag>
                <PostCardHeading variant="heading5">
                  {post.title}
                </PostCardHeading>
                <Paragraph sx={{ mb: 3 }}>{post.description}</Paragraph>
                <Flex sx={{ color: 'neutral.7' }}>
                  <Text variant="detail" sx={{}}>
                    {isoDateStringToLabel(post.createdAt)}
                  </Text>
                  <Text variant="detail" sx={{ ml: 4 }}>
                    {post.readingLength}
                  </Text>
                </Flex>
              </LinkCard>
            ))}
          </div>
        </ContentWrap>
      </ContentBorder>
      <SubscribeContentBlock />
      <Footer />
    </div>
  );
};

Blog.propTypes = {
  posts: PropTypes.array,
};

export default Blog;
