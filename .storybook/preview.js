import ThemeProvider from '../src/styles/ThemeProvider';
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { MemoryRouter } from "react-router";

// Memory router is used to allow react router Link components to render within storybook stories.
export const decorators = [(Story) => <ThemeProvider><MemoryRouter initialEntries={['/']}><Story /></MemoryRouter></ThemeProvider>];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
