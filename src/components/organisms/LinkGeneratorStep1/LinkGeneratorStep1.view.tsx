import React, { useRef } from 'react';
import { useTranslation } from '@helpers/i18n';
import { TextField, IconButton, Button } from '@material-ui/core';
import { LinkGeneratorStatus } from '@types/linkTypes';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import * as S from './LinkGeneratorStep1.style';
import * as T from './LinkGeneratorStep1.type';

const LinkGeneratorStep1View = ({
  disabled,
  sourceLink,
  status,
  onPropCheck,
  onPropEnter,
}: T.LinkGeneratorStep1ViewProps) => {
  const { t } = useTranslation();
  const valueRef = useRef('');

  const helperText = () => {
    switch (status) {
      case LinkGeneratorStatus.empty:
        return t('linkGenerator.step1.form.error.empty');
      case LinkGeneratorStatus.specific:
        return t('linkGenerator.step1.form.error.specific');
      default:
        return '';
    }
  };

  return (
    <>
      <S.Title variant="h3">{t('linkGenerator.step1.title')}</S.Title>
      <TextField
        inputRef={valueRef}
        error={status !== LinkGeneratorStatus.none}
        required
        fullWidth
        disabled={disabled}
        id="outlined-error-helper-text"
        placeholder={t('linkGenerator.step1.form.placeholder')}
        defaultValue={sourceLink}
        helperText={helperText()}
        variant="outlined"
        onChange={event => {
          onPropCheck(event.target.value.trim());
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            onPropEnter(event.target.value.trim());
            event.preventDefault();
          }
        }}
      />
      <S.ActionContainer>
        <Button
          variant="contained"
          color="primary"
          disabled={disabled}
          onClick={() => onPropEnter(valueRef.current.value.trim())}
        >
          {disabled ? t('linkGenerator.step1.loading') : t('linkGenerator.step1.next')}
        </Button>
      </S.ActionContainer>
    </>
  );
};

export default LinkGeneratorStep1View;
