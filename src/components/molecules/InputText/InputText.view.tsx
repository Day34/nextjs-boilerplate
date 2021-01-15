import React from 'react';
import InputFrame from '@molecules/InputFrame';
import * as S from './InputText.style';
import * as T from './InputText.type';

const InputTextView = ({ inline, frameTitle, ...props }: T.InputTextViewProps) => {
  return (
    <InputFrame inline={inline} frameTitle={frameTitle}>
      <S.Text {...props} />
    </InputFrame>
  );
};

export default InputTextView;
