import React from 'react';
import * as S from './SupportSingle.style';
import * as T from './SupportSingle.type';
import { InputLabel, TextField, Typography } from '@material-ui/core';

const SupportSingleView = ({ title, description, date }: T.SupportSingleViewProps) => {
  return (
    <>
      <Typography variant="h3" component="p">
        {title}
      </Typography>
      <div>{description}</div>
      <Typography variant="h3" component="p">
        {date}
      </Typography>
    </>
  );
};

export default SupportSingleView;
