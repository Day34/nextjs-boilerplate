import React from 'react';
import InputFrame from '@molecules/InputFrame';
import * as S from './InputButton.style';
import * as T from './InputButton.type';

const InputButtonView = ({ inline, frameTitle, buttonText, ...props }: T.InputButtonViewProps) => {
  return (
    <InputFrame inline={inline} frameTitle={frameTitle}>
      <S.Button {...props}>{buttonText}</S.Button>
    </InputFrame>
  );
};

export default InputButtonView;
