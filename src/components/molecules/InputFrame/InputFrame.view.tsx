import React from 'react';
import { InputLabel } from '@material-ui/core';
import * as S from './InputFrame.style';
import * as T from './InputFrame.type';

const InputFrameView = ({ children, inline, frameTitle }: T.InputFrameViewProps) => {
  return (
    <S.Wrapper inline={inline}>
      <InputLabel>{frameTitle}</InputLabel>
      {children}
    </S.Wrapper>
  );
};

export default InputFrameView;
