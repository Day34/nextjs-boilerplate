import React, { FC } from 'react';
import * as S from './LinkGenerator.style';
import * as T from './LinkGenerator.type';
import MenuNavigation from '@molecules/MenuNavigation';
import ImageIcon from '@atoms/ImageIcon';
import { Stepper, Step, StepLabel, IconButton } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { useTranslation } from '@helpers/i18n';

const LinkGeneratorView: FC<T.LinkGeneratorViewProps> = ({
  children,
  steps,
  step,
  onPrev,
  onNext,
}: T.LinkGeneratorViewProps) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Stepper activeStep={step - 1}>
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {children}
    </S.Container>
  );
};

export default LinkGeneratorView;
