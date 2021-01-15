import NextI18Next from 'next-i18next';

import * as path from 'path';

const NextI18NextInstance = new NextI18Next({
  browserLanguageDetection: false,
  defaultLanguage: 'en',
  otherLanguages: ['ko'],
  fallbackLng: 'en',
  keySeparator: '.',
  localePath: path.resolve('./public/static/locales'),
  strictMode: false,
});

export const { appWithTranslation, useTranslation, withTranslation } = NextI18NextInstance;

export const includeDefaultNamespaces = (namespaces: string[]) => ['common'].concat(namespaces);
