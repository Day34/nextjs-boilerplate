import React from 'react';
import * as T from './PaymentForm.type';
import * as S from './PaymentForm.style';
import { Button, TextField } from '@material-ui/core';
import { AuthStatus } from '@types/linkTypes';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from '@helpers/i18n';
import InputText from '@molecules/InputText';
import InputButton from '@molecules/InputButon';

const PaymentFormView = ({ onPropPaymentForm }: T.PaymentFormViewProps) => {
  const { t } = useTranslation();

  return (
    <>
      <InputText inline={false} frameTitle="상품명" error={false} defaultValue="1개월 정기 이용권" variant="outlined" />
      <InputText inline={false} frameTitle="링크" error={false} defaultValue="니다닷컴.좋아요.com" variant="outlined" />
      <InputText
        inline={false}
        frameTitle="기간"
        error={false}
        defaultValue="2020-01-01 ~ 2020-01-31"
        variant="outlined"
      />
      <InputText inline={false} frameTitle="금액" error={false} defaultValue="9,900" variant="outlined" />
      <InputText
        inline={false}
        frameTitle="기타"
        error={false}
        defaultValue="매월 자동 결제 됩니다"
        variant="outlined"
      />
      <Button color="primary" variant="contained" onClick={onPropPaymentForm}>
        결제하기
      </Button>
    </>
  );
};

export default PaymentFormView;
