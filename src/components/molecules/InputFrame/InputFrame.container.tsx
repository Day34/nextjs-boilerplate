import React from 'react';
import InputFrameView from './InputFrame.view';
import * as T from './InputFrame.type';

const InputFrameContainer = ({ children, inline, frameTitle }: T.InputFrameProps) => {
  return (
    <InputFrameView inline={inline} frameTitle={frameTitle}>
      {children}
    </InputFrameView>
  );
};

export default InputFrameContainer;
