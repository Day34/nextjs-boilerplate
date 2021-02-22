import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Grid, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from '@helpers/i18n';
import { AuthStatus } from '@types/linkTypes';
import { useStyles } from '../SignUpForm/SignUpForm.style';
import InputText from '@atoms/InputText';
import InputButton from '@atoms/InputButton';
import * as T from './ForgotPasswordForm.type';

const ForgotPasswordFormView = ({ emailStatus, onPropEmailCheck, onPropProcess }: T.ForgotPasswordFormViewProps) => {
  const style = useStyles();

  const { t } = useTranslation();

  const emailHelperText = () => {
    switch (emailStatus) {
      case AuthStatus.empty:
        return t('validation.email.error.empty');
      case AuthStatus.email:
        return t('validation.email.error.format');
      default:
        return '';
    }
  };

  return (
    <Container maxWidth="xs">
      <div className={style.paper}>
        <div className={style.header}>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('auth.forgotPassword.title')}
          </Typography>
        </div>
        <Grid container spacing={2} className={style.body}>
          <Grid item xs={12}>
            <InputText
              required
              label={t('validation.email.title')}
              placeholder={t('validation.email.placeholder')}
              error={emailStatus !== AuthStatus.none}
              helperText={emailHelperText()}
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={event => {
                onPropEmailCheck(event.target.value.trim());
              }}
            />
          </Grid>
        </Grid>
        <div className={style.footer}>
          <InputButton variant="contained" color="primary" fullWidth className={style.process} onClick={onPropProcess}>
            {t('auth.forgotPassword.process')}
          </InputButton>
          <InputButton variant="contained" color="primary" fullWidth className={style.process} onClick={onPropProcess}>
            {t('auth.forgotPassword.process')}
          </InputButton>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPasswordFormView;
