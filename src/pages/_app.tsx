import React from 'react';
import { AppProps } from 'next/app';
import ResetCSS from '@styles/reset';
import { appWithTranslation } from '@helpers/i18n';
import { wrapper } from '@constants/configureStore';

/* eslint-disable react/jsx-props-no-spreading */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ResetCSS />

      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(appWithTranslation(MyApp));
