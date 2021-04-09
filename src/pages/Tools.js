/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
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
import ProjectCard from '../components/ProjectCard';
import { imgTestIllBlue, imgIllProjects } from '../assets/assetLoader';
import PostCardHeading from '../components/PostCardHeading';
import PostCardTag from '../components/PostCardTag';
import Image from '../components/Image';
import LinkCard from '../components/LinkCard';

const Tools = ({ tools }) => {
  return (
    <div>
      <header>
        <Nav />
        <ContentWrap sx={{ pt: 8, pb: 6, textAlign: 'center' }}>
          <Heading as="h1" variant="heading2" sx={{ mb: 4 }}>
            Developer tools
          </Heading>
          <Paragraph>Useful things I have made for developers.</Paragraph>
        </ContentWrap>
      </header>
      <ContentWrap maxWidth={1144}>
        <Flex sx={{ justifyContent: 'center', mb: 9 }}>
          {/* <div
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridGap: '64px 48px',
                mb: 9,
              }}
            > */}
          {tools &&
            tools.map((tool) => (
              <Link
                to={`${routeUrls.tools}/${tool.slug}`}
                key={tool.slug}
                sx={{
                  bg: 'neutral.9',
                  p: 4,
                  mx: 4,
                  width: '33%',
                  ':hover': {
                    boxShadow: (theme) =>
                      `0 0px 0px 4px ${theme.colors.primaryLight}`,
                  },
                }}
              >
                <PostCardTag to="">{tool.tag}</PostCardTag>
                <PostCardHeading variant="heading5">
                  {tool.title}
                </PostCardHeading>
                <Paragraph sx={{ mb: 4 }} variant="bodySmall">
                  {tool.description}
                </Paragraph>
                <Image
                  src={tool.srcThumb}
                  sx={{
                    height: 200,
                    objectFit: 'contain',
                    width: '100%',
                  }}
                />
              </Link>
            ))}
          {/* </div> */}
        </Flex>
      </ContentWrap>

      <SubscribeContentBlock />
      <Footer />
    </div>
  );
};

Tools.defaultProps = {
  tools: [],
};

export default Tools;
