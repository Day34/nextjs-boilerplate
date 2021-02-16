import React from 'react';
import * as T from './Account.type';
import { useStyles } from './Account.style';
import { Button, Link, TextField } from '@material-ui/core';
import { AuthStatus } from '@types/linkTypes';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from '@helpers/i18n';
import InputText from '@atoms/InputText';
import InputButton from '@atoms/InputButton';

const AccountView = ({ onPropChangePassword, onPropWithdrawal }: T.AccountViewProps) => {
  const style = useStyles();

  const { t } = useTranslation();

  return (
    <>
      <InputText
        required
        label={t('account.provider')}
        defaultValue="facebook"
        variant="outlined"
        fullWidth
        margin="normal"
        readyOnly
      />
      <InputText
        required
        label={t('account.email')}
        defaultValue="kmi1002@softark.co.kr"
        variant="outlined"
        fullWidth
        margin="normal"
        readyOnly
      />
      <InputText
        required
        label={t('account.name')}
        defaultValue="김명일"
        variant="outlined"
        fullWidth
        margin="normal"
        readyOnly
      />
      <InputText
        required
        label={t('account.createdAt')}
        defaultValue="2020-01-01 00:00:00"
        variant="outlined"
        fullWidth
        margin="normal"
        readyOnly
      />

      <Grid container spacing={2} justify="space-between">
        <Grid item>
          <InputButton variant="contained" color="primary">
            {t('account.changePassword')}
          </InputButton>
        </Grid>
        <Grid item>
          <InputButton variant="contained" color="secondary">
            {t('account.withdrawal')}
          </InputButton>
        </Grid>
      </Grid>
    </>
  );
};

export default AccountView;
