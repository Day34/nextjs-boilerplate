import { newViewports } from './helpers/ViewportHelper';
import CssBaseline from '@material-ui/core/CssBaseline';

// import ResetCSS from '@styles/reset';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
// https://github.com/isaachinman/next-i18next/issues/324
import { makeStore } from '../src/constants/configureStore';
import { Provider } from 'react-redux';
import muiTheme from '../src/assets/styles/theme';

import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: { viewports: newViewports },
};

// export const withGlobalStyle = storyFn => (
//   <Provider store={wrapper}>
//     <I18nextProvider i18n={i18n}>
//       <ResetCSS />
//       {storyFn()}
//     </I18nextProvider>
//   </Provider>
// );

export const decorators = [
  Story => (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={muiTheme}>
        <MuiThemeProvider theme={muiTheme}>
          <Provider store={makeStore()}>
            <CssBaseline />
            <Story />
          </Provider>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  ),
];
