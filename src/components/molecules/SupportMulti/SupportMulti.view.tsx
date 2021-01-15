import React from 'react';
import * as S from './SupportMulti.style';
import * as T from './SupportMulti.type';
import { InputLabel, TextField, Typography } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const SupportMultiView = ({ categories, rows }: T.SupportMultiViewProps) => {
  return (
    <div>
      <div>
        {categories.map(({ title }, index) => (
          <span>{title}</span>
        ))}
      </div>
      <div>
        {rows.map(({ id, title, description, date, expand }, index) => (
          <MuiAccordion key={id} square>
            <MuiAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>{title}</Typography>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
              <Typography>{description}</Typography>
            </MuiAccordionDetails>
          </MuiAccordion>
        ))}
      </div>
    </div>
  );
};

export default SupportMultiView;
