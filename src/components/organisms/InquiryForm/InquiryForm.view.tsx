import React from 'react';
import * as T from './InquiryForm.type';
import * as S from './InquiryForm.style';
import { Button, TextField } from '@material-ui/core';
import { AuthStatus } from '@types/linkTypes';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from '@helpers/i18n';
import InputText from '@molecules/InputText';
import InputSelect from '@molecules/InputSelect';

const InquiryFormView = ({ onPropOk, onPropCancel }: T.InquiryFormViewProps) => {
  const { t } = useTranslation();

  return (
    <>
      <InputSelect frameTitle="문의 유형" color="primary" variant="outlined" options={[{ title: 'title', value: 1 }]} />
      <InputText frameTitle="이름" variant="outlined" />
      <InputText frameTitle="이메일" variant="outlined" />
      <InputText frameTitle="연락처" variant="outlined" />
      <InputText frameTitle="제목" variant="outlined" />
      <InputText frameTitle="내용" variant="outlined" />
      <>
        <Button color="primary" variant="contained" onClick={onPropOk}>
          저장
        </Button>
        <Button color="secondary" variant="contained" onClick={onPropCancel}>
          취소
        </Button>
      </>
    </>
  );
};

export default InquiryFormView;
