import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { PATHS } from 'src/constants';
import { useStyles } from './signUp.style';
import { userActions } from 'src/redux/actions';
import Footer from '../../components/Footer';

const { userSignUp } = userActions;
const { SIGNIN } = PATHS;

const validationSchema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
})

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign Up
            </Typography>
            <Formik 
            initialValues = {{
                email: '',
                password: ''
            }}
            validationSchema = {validationSchema}
            onSubmit={async (data, { setSubmitting })=>{
                setSubmitting(true);
                dispatch(userSignUp(data));
                setSubmitting(false);
            }}
            > 
            {({ errors, isSubmitting, handleSubmit})=>(  
                
            <Form className={classes.form}>
              <Field
                  name="email"
                  type="input"
                  as={TextField}
                  id="email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  placeholder="Email Address"
                  autoComplete="email"
                  autoFocus
              />
              <Field
                  name="password"
                  type="password"
                  as={TextField}
                  id="password"
                  label="password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  placeholder="Password Address"
                  autoComplete="password"
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
              >Sign Up </Button>
              <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                  <Link to={SIGNIN}>
                      {"Sign In"}
                  </Link>
                  </Grid>
              </Grid>
            </Form>
            )}
            </Formik>
        </div>
        <Box mt={8}>
            <Footer />
        </Box>
    </Container>
  );
}

export default SignUp;