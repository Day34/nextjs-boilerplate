import React from 'react';
import InputTextView from './InputText.view';

import * as T from './InputText.type';

const InputTextContainer = ({ inline, frameTitle, ...props }: T.InputTextViewProps) => {
  return <InputTextView inline={inline} frameTitle={frameTitle} {...props} />;
};

export default InputTextContainer;
