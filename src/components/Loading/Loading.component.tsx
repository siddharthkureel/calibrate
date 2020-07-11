import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './loading.styles';

export default () => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
    </Backdrop>
  );
}