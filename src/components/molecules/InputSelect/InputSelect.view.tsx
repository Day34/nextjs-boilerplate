import React from 'react';
import * as S from './InputSelect.style';
import * as T from './InputSelect.type';
import InputFrame from '../InputFrame';

const InputSelectView = ({ inline, frameTitle, options, ...props }: T.InputSelectViewProps) => {
  return (
    <InputFrame inline={inline} frameTitle={frameTitle}>
      <S.Select {...props}>
        {options.map(({ title, value }) => (
          <S.Option key={value} value={value}>
            {title}
          </S.Option>
        ))}
      </S.Select>
    </InputFrame>
  );
};

export default InputSelectView;
