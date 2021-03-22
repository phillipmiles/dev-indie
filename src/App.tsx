/** @jsx jsx */
import { jsx } from 'theme-ui';
import ThemeProvider from './styles/ThemeProvider';
import Router from './router/Router';
import './services/firebase';
import './services/sentry';
import { initAnalytics } from './services/analytics';
import { useEffect } from 'react';
import handleError from './errors/handleError';

const App = (): JSX.Element => {
  useEffect(() => {
    try {
      initAnalytics();
    } catch (error) {
      handleError(error);
    }
  }, []);

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
