import React from 'react';
import { useTranslation } from '@helpers/i18n';
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Header from '../components/organisms/Header';

const Index = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box pt={12} pb={4}>
            <Grid item xs={12}>
              <Header />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
