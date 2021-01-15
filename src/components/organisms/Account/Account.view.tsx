import React from 'react';
import * as T from './Account.type';
import * as S from './Account.style';
import { TextField } from '@material-ui/core';
import { AuthStatus } from '@types/linkTypes';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from '@helpers/i18n';
import InputText from '@molecules/InputText';
import InputButton from '@molecules/InputButon';

const AccountView = ({ onPropChangePassword, onPropWithdrawal }: T.AccountViewProps) => {
  const { t } = useTranslation();

  return (
    <>
      <InputText frameTitle="가입방식" defaultValue="facebook" variant="outlined" />
      <InputText frameTitle="이메일" defaultValue="kmi1002@softark.co.kr" variant="outlined" />
      <InputText frameTitle="이름" defaultValue="김명일" variant="outlined" />
      <InputText frameTitle="가입일" defaultValue="2020-01-01 00:00:00" variant="outlined" />
      <InputButton
        color="primary"
        frameTitle="이름"
        buttonText="비밀번호 변경하기"
        variant="contained"
        onPropClick={onPropChangePassword}
      />
      <InputButton
        color="secondary"
        frameTitle="이름"
        buttonText="탈퇴하기"
        variant="contained"
        onPropClick={onPropWithdrawal}
      />
    </>
  );
};

export default AccountView;
