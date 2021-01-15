import React, { useRef } from 'react';
import { useTranslation } from '@helpers/i18n';
import { removeHttp } from '@helpers/RegexHelper';
import { Button } from '@material-ui/core';
import * as S from './LinkGeneratorStep3.style';
import * as T from './LinkGeneratorStep3.type';
import { TextField, InputAdornment } from '@material-ui/core';
import { LinkGeneratorStatus } from '@types/linkTypes';

const LinkGeneratorStep3View = ({
  status,
  disabled,
  nidaLink,
  targetLink,
  onPropCheck,
  onPropBack,
  onPropEnter,
}: T.LinkGeneratorStep3ViewProps) => {
  const { t } = useTranslation();
  const valueRef = useRef('');

  const helperText = () => {
    switch (status) {
      case LinkGeneratorStatus.empty:
        return t('linkGenerator.step3.form.error.empty');
      case LinkGeneratorStatus.specific:
        return t('linkGenerator.step3.form.error.specific');
      case LinkGeneratorStatus.url:
        return t('linkGenerator.step3.form.error.url');

      default:
        return '';
    }
  };

  return (
    <div>
      <S.Title variant="h3">{nidaLink}</S.Title>
      <TextField
        inputRef={valueRef}
        error={status !== LinkGeneratorStatus.none}
        required
        fullWidth
        disabled={disabled}
        id="outlined-error-helper-text"
        placeholder={t('linkGenerator.step3.form.placeholder')}
        defaultValue={removeHttp(targetLink)}
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
        InputProps={{
          startAdornment: <InputAdornment position="start">http://</InputAdornment>,
        }}
      />
      <S.ActionContainer>
        <Button variant="contained" disabled={disabled} onClick={onPropBack}>
          {t('linkGenerator.step3.prev')}
        </Button>
        <Button variant="contained" disabled={disabled} onClick={() => onPropEnter(valueRef.current.value.trim())}>
          {disabled ? t('linkGenerator.step1.loading') : t('linkGenerator.step3.next')}
        </Button>
      </S.ActionContainer>
    </div>
  );
};

export default LinkGeneratorStep3View;
