import { newViewports } from './helpers/ViewportHelper';
import ResetCSS from '@styles/reset';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
// https://github.com/isaachinman/next-i18next/issues/324
import { makeStore } from '../src/constants/configureStore';
import { Provider } from 'react-redux';

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
    <Provider store={makeStore()}>
      <ResetCSS />
      <Story />
    </Provider>
  ),
];
