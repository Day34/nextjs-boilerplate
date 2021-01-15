import React from 'react';
import { useTranslation } from '@helpers/i18n';
import { Button } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as S from './LinkGeneratorStep4.style';
import * as T from './LinkGeneratorStep4.type';

const LinkGeneratorStep4View = ({ nidaLink, onPropCopy, onPropLogin }: T.LinkGeneratorStep4ViewProps) => {
  const { t } = useTranslation();

  return (
    <>
      <S.Title variant="h3">{nidaLink}</S.Title>
      <S.Input
        fullWidth
        id="outlined-error-helper-text"
        variant="outlined"
        defaultValue={t('linkGenerator.step4.form.placeholder')}
        inputProps={{ readOnly: true }}
      />
      <S.ActionContainer>
        <CopyToClipboard text={nidaLink}>
          <Button variant="contained" onClick={onPropCopy}>
            {t('linkGenerator.step4.copy')}
          </Button>
        </CopyToClipboard>
        <Button variant="contained" onClick={onPropLogin}>
          {t('linkGenerator.step4.login')}
        </Button>
      </S.ActionContainer>
    </>
  );
};

export default LinkGeneratorStep4View;
