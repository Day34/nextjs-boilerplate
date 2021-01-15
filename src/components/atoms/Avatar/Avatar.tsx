import React from 'react';
import * as S from './Avatar.style';
import * as T from './Avatar.type';

const Avatar = ({ src, alt }: T.AvatarPorps) => (
  <S.Wrapper>
    <S.Picture>
      <S.Avatar src={src} alt={alt} />
    </S.Picture>
  </S.Wrapper>
);

export default Avatar;
