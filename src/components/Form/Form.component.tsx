import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Footer from 'src/components/Footer';
import { useStyles } from './form.styles';

type Props = {
    heading?: string,
    validationSchema: yup.ObjectSchema,
    initialValues: object,
    handlingSubmit: () => void,
    submitButton: string,
    children: React.ReactNode
}

export default ({ heading,  validationSchema, initialValues, handlingSubmit, submitButton, children  }: Props) => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                {heading}
                </Typography>
                <Formik 
                    initialValues = {initialValues}
                    validationSchema = {validationSchema}
                    onSubmit={async (data, { setSubmitting })=>{
                        setSubmitting(true);
                        handlingSubmit();
                        setSubmitting(false);
                    }}
                > 
                {({ errors, isSubmitting })=>(        
                    <Form className={classes.form}>
                        {children}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            className={classes.submit}
                        >{submitButton}</Button>
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