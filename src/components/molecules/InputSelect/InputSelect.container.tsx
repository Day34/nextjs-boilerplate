import React from 'react';
import InputSelectView from './InputSelect.view';

import * as T from './InputSelect.type';

const InputSelectContainer = ({ inline, frameTitle, options, ...props }: T.InputSelectViewProps) => {
  return <InputSelectView inline={inline} frameTitle={frameTitle} options={options} {...props} />;
};

export default InputSelectContainer;
