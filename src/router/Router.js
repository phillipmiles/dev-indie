/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Router as RRRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import ActivityIndicator from '../components/ActivityIndicator';
import Nav from '../components/Nav';
import routeUrls from './routeUrls';
import ScrollToTop from './ScrollToTop';
import history from './history';
import useLogPageView from '../hooks/useLogPageView';

const Home = loadable(() => import('../pages/Home.container.js'), {
  fallback: <ActivityIndicator />,
});

const Blog = loadable(() => import('../pages/Blog.container'), {
  fallback: <ActivityIndicator />,
});

const Projects = loadable(() => import('../pages/Projects.container'), {
  fallback: <ActivityIndicator />,
});

const About = loadable(() => import('../pages/About.container'), {
  fallback: <ActivityIndicator />,
});

const Router = () => {
  // Will listen for changes to the history location and send them to firebase
  // analytics as page_view events.
  useLogPageView(history);

  return (
    <RRRouter history={history}>
      <ScrollToTop />
      <Nav />
      <Switch>
        <Route path={routeUrls.blog}>
          <Blog />
        </Route>
        <Route path={routeUrls.projects}>
          <Projects />
        </Route>
        <Route path={routeUrls.about}>
          <About />
        </Route>
        <Route path={routeUrls.home}>
          <Home />
        </Route>
      </Switch>
    </RRRouter>
  );
};

export default Router;