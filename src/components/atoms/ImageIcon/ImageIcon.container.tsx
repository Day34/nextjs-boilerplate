import React from 'react';
import ImageIconView from './ImageIcon.view';
import * as T from './ImageIcon.type';

const ImageIconContainer = ({ type, flipHorizontal, flipVertical }: T.IconProps) => {
  const IMAGES = {
    'no-image': 'null',
    logo: require('@images/logo.png'),
  };

  return <ImageIconView src={IMAGES[type]} alt="" flipHorizontal={flipHorizontal} flipVertical={flipVertical} />;
};

export default ImageIconContainer;
