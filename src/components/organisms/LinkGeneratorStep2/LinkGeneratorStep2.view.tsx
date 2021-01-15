import React from 'react';
import { useTranslation } from '@helpers/i18n';
import { Button } from '@material-ui/core';
import * as S from './LinkGeneratorStep2.style';
import * as T from './LinkGeneratorStep2.type';

const LinkGeneratorStep2View = ({ nidaLink, onPropBack, onPropEnter }: T.LinkGeneratorStep2ViewProps) => {
  const { t } = useTranslation();

  return (
    <>
      <S.Title variant="h3">{nidaLink}</S.Title>
      <S.Input
        fullWidth
        id="outlined-error-helper-text"
        variant="outlined"
        defaultValue={t('linkGenerator.step2.form.placeholder')}
        inputProps={{ readOnly: true }}
      />
      <S.ActionContainer>
        <Button variant="contained" onClick={onPropBack}>
          {t('linkGenerator.step2.prev')}
        </Button>
        <Button variant="contained" onClick={onPropEnter}>
          {t('linkGenerator.step2.next')}
        </Button>
      </S.ActionContainer>
    </>
  );
};

export default LinkGeneratorStep2View;
