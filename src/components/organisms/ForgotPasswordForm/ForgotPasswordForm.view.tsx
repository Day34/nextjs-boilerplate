import React from 'react';
import * as T from './SignUpForm.type';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useTranslation } from '@helpers/i18n';
import { AuthStatus } from '@types/linkTypes';

const ForgotPasswordFormView = ({ emailStatus, onPropEmailCheck, onPropProcess }: T.ForgotPasswordFormViewProps) => {
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
    <Container component="main" maxWidth="xs">
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('forgotPassword.title')}
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" onClick={onPropProcess}>
            {t('forgotPassword.process')}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ForgotPasswordFormView;
