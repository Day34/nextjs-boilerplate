import React from 'react';
import * as T from './SignUpForm.type';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { AuthStatus } from '@types/linkTypes';
import { useTranslation } from '@helpers/i18n';

const SignUpFormView = ({
  nameStatus,
  emailStatus,
  passwordStatus,
  onPropNameCheck,
  onPropEmailCheck,
  onPropPasswordCheck,
  onPropProcess,
  onPropAgree,
}: T.SignUpFormViewProps) => {
  const { t } = useTranslation();

  const nameHelperText = () => {
    switch (nameStatus) {
      case AuthStatus.empty:
        return t('validation.name.error.empty');
      case AuthStatus.name:
        return t('validation.name.error.format');
      default:
        return '';
    }
  };

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
      <CssBaseline />
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('signUp.title')}
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={nameStatus !== AuthStatus.none}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label={t('validation.name.title')}
                placeholder={t('validation.name.placeholder')}
                helperText={nameHelperText()}
                name="lastName"
                autoComplete="lname"
                onChange={event => {
                  onPropNameCheck(event.target.value.trim());
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={emailStatus !== AuthStatus.none}
                variant="outlined"
                required
                fullWidth
                id="email"
                label={t('validation.email.title')}
                placeholder={t('validation.email.placeholder')}
                helperText={emailHelperText()}
                name="email"
                autoComplete="email"
                onChange={event => {
                  onPropEmailCheck(event.target.value.trim());
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={passwordStatus !== AuthStatus.none}
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={t('signUp.agree')}
                onChange={event => {
                  onPropAgree(event.target.checked);
                }}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" onClick={onPropProcess}>
            {t('signUp.process')}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                {t('signUp.alreadyAccount')}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUpFormView;
