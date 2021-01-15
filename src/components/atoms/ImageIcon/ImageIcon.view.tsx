import React from 'react';
import * as S from './ImageIcon.style';
import * as T from './ImageIcon.type';

const ImageIconView = ({ src, alt, flipHorizontal, flipVertical }: T.ImgProps) => {
  return <S.Icon src={src} alt={alt} flipHorizontal={flipHorizontal} flipVertical={flipVertical} />;
};

export default ImageIconView;
