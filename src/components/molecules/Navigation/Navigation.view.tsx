import React from 'react';
import NavigationItem from '../NavigationItem';

import * as S from './Navigation.style';
import * as T from './Navigation.type';

const NavigationView = ({ direction, items }: T.NavigationProps) => {
  return (
    <S.Container direction={direction}>
      {items.map(({ title, url, icon }) => (
        <a href={url}>{title}</a>
      ))}
    </S.Container>
  );
};

export default NavigationView;
