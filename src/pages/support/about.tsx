import React from 'react';
import { useTranslation } from '@helpers/i18n';

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>Welcome {t('about')}</h1>{' '}
      <button type="button" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')}>
        Change Language
      </button>
    </div>
  );
};

export default About;
