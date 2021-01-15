import React from 'react';
import Avatar from '@atoms/Avatar';
import { useTranslation } from '@helpers/i18n';

const Index = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>Welcome {t('common.good')}</h1>
      <Avatar
        src="http://rgo4.com/files/attach/images/2681740/158/890/029/afd813f3b8f37d0b37fa527c2052109a.jpg"
        alt="alt"
      />
      <button type="button" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')}>
        Change Language
      </button>
    </div>
  );
};

export default Index;
