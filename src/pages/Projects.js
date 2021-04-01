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
import ContentBorder from '../components/ContentBorder';
import Nav from '../components/Nav';
import ProjectCard from '../components/ProjectCard';

const Projects = ({ projects }) => {
  return (
    <div>
      <header>
        <ContentBorder left right>
          <Nav />
        </ContentBorder>
      </header>
      <ContentBorder left right>
        <ContentWrap sx={{ pt: 8 }}>
          <div sx={{ width: '60%', mb: 6 }}>
            <Heading as="h1" variant="heading2" sx={{ mb: 5 }}>
              Real apps, transparently developed.
            </Heading>
            <Paragraph sx={{ mb: 8 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              eros velit, sollicitudin vel gravida sit amet, gravida eget
              sapien. Proin tellus lorem, rhoncus eu pharetra non, dapibus a
              nisl. Fusce aliquam nisi ut nunc suscipit sollicitudin.
            </Paragraph>
          </div>
        </ContentWrap>
        <ContentWrap maxWidth={1144}>
          {projects &&
            projects.map((project) => (
              <ProjectCard
                sx={{ mb: 8 }}
                key={project.slug}
                url={project.slug}
                title={project.title}
                description={project.description}
                srcThumb={project.srcThumb}
                platforms={project.platforms}
                stack={project.stack}
              />
            ))}
        </ContentWrap>
        <ContentWrap sx={{ pb: 9, textAlign: 'center', color: 'neutral.7' }}>
          <Paragraph>
            More ideas are{' '}
            <span sx={{ fontStyle: 'italic', mb: 6 }}>simmering...</span>
          </Paragraph>
        </ContentWrap>
      </ContentBorder>
      <SubscribeContentBlock />
      <Footer />
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.array,
};

Projects.defaultProps = {
  projects: [],
};

export default Projects;
