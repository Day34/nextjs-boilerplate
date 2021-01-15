import React from 'react';
import InputButtonView from './InputButton.view';
import * as T from './InputButton.type';

const InputButtonContainer = ({ inline, frameTitle, buttonText, ...props }: T.InputButtonProps) => {
  return <InputButtonView inline={inline} frameTitle={frameTitle} buttonText={buttonText} {...props} />;
};

export default InputButtonContainer;
