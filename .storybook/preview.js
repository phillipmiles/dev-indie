import ThemeProvider from '../src/styles/ThemeProvider';
/** @jsx jsx */
import { jsx } from 'theme-ui';

export const decorators = [(Story) => <ThemeProvider><Story/></ThemeProvider>];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}