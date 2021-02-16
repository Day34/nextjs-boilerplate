import NextI18Next from 'next-i18next';

import * as path from 'path';

const NextI18NextInstance = new NextI18Next({
  browserLanguageDetection: false,
  defaultLanguage: 'ko',
  otherLanguages: ['ko'],
  fallbackLng: 'ko',
  keySeparator: '.',
  localePath: path.resolve('./public/static/locales'),
  strictMode: false,
});

export const { appWithTranslation, useTranslation, withTranslation, i18n } = NextI18NextInstance;

export const includeDefaultNamespaces = (namespaces: string[]) => ['common'].concat(namespaces);
