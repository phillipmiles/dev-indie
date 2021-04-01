/** @jsx jsx */
import { jsx } from 'theme-ui';
import Projects from './Projects';
import projects from '../data/projects';

const ProjectsContainer = () => {
  return <Projects projects={projects} />;
};

export default ProjectsContainer;
