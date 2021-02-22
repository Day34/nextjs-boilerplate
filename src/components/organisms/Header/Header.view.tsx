import React from 'react';
import ImageIcon from '@atoms/ImageIcon';
import Navigation from '@molecules/Navigation';
import * as S from './Header.style';

import { useTranslation } from '@helpers/i18n';

const HeaderView = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <div>
        <ImageIcon type="logo" />
      </div>
      <Navigation
        items={[{ title: t('header.navigation.product') }, { title: t('header.navigation.login') }]}
        direction="horizontal"
      />
    </S.Container>
  );
};

export default HeaderView;
