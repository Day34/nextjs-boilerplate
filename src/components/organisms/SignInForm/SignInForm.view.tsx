import React from 'react';
import * as T from './SignInForm.type';
import * as S from './SignInForm.style';
import Button from '@material-ui/core/Button';
import { Avatar, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useTranslation } from '@helpers/i18n';
import { AuthStatus, LinkGeneratorStatus } from '@types/linkTypes';
import { ProviderType } from '@stores/auth/type';

const SignInFormView = ({
  emailStatus,
  passwordStatus,
  onPropSns,
  onPropEmailCheck,
  onPropPasswordCheck,
  onPropProcess,
}: T.SignInFormViewProps) => {
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

  const passwordHelperText = () => {
    switch (passwordStatus) {
      case AuthStatus.empty:
        return t('validation.password.error.empty');
      case AuthStatus.password:
        return t('validation.password.error.format');
      default:
        return '';
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('signIn.title')}
        </Typography>
        <div>
          <div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                onPropSns(ProviderType.GOOGLE);
              }}
            >
              {t('signIn.sns.google')}
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                onPropSns(ProviderType.FACEBOOK);
              }}
            >
              {t('signIn.sns.facebook')}
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                onPropSns(ProviderType.KAKAO);
              }}
            >
              {t('signIn.sns.kakao')}
            </Button>
          </div>
          <div>
            <TextField
              error={emailStatus !== AuthStatus.none}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={t('validation.email.title')}
              placeholder={t('validation.email.placeholder')}
              helperText={emailHelperText()}
              name="email"
              autoComplete="email"
              autoFocus
              onChange={event => {
                onPropEmailCheck(event.target.value.trim());
              }}
            />
            <TextField
              error={passwordStatus !== AuthStatus.none}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={t('validation.password.title')}
              placeholder={t('validation.password.placeholder')}
              helperText={passwordHelperText()}
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={event => {
                onPropPasswordCheck(event.target.value.trim());
              }}
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button fullWidth variant="contained" color="primary" onClick={onPropProcess}>
              {t('signIn.process')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {t('signIn.forgotPassword')}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {t('signIn.notAccount')}
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignInFormView;
