import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';

import Modal from 'src/components/Modal';
import { clientActions } from 'src/redux/actions';
import { initialValues, validationSchema, Data, trim, capitalizeName } from './addClient.config';
import { useStyles } from './addClient.styles';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';

const { addClient } = clientActions;

type FormProps = {
    errors: Data,
    isSubmitting: boolean,
    values: Data,
    resetForm: ()=>void
}

const AddClient = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [create, setCreate] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1);
    const valid = step - 1;
    const handleNext = () => {
       return setStep(step + 1)
    }
    const handleCancel = (resetForm: any) =>{
        setCreate(!create)
        resetForm()
    }
    return (
        <div> 
            { !create ?
            <Button onClick={()=>setCreate(!create)} variant="outlined" color="inherit" className={classes.addButton}>
                Add Client
            </Button>
            : 
            <Modal open={create}>
            <Container component="main" maxWidth="xs">
            <div className={classes.containerGroup} >
                <CssBaseline />
                <div className={classes.paper}></div>    
                    <Formik 
                        initialValues = {initialValues}
                        validationSchema = {validationSchema[valid]}
                        onSubmit={async (data, { setSubmitting })=>{
                            setSubmitting(true);
                            trim(data)
                            data.name = capitalizeName(data.name)
                            dispatch(addClient(data))
                            setSubmitting(false);
                    }}
                    >{({ errors, isSubmitting, values, resetForm }: FormProps)=>{
                        const errorArray = Object.values(errors);
                        const truthy = errorArray.every(a=>a==="");
                        return(  
                        <Form className={classes.form} >
                            <Typography variant="h4" component="h4" gutterBottom>Add Client</Typography>
                            {step === 1 && ( <Step1 errors={errors} values={values} /> )}
                            {step === 2 && ( <Step2 errors={errors} values={values}/> )}
                            {step === 3 && ( <Step3 errors={errors} /> )}
                            <div className={classes.buttonGroup} >
                                {step > 1 ?
                                    <Button onClick={()=>setStep(step-1)} variant="outlined" color="secondary">
                                        back
                                    </Button> 
                                    :
                                    <Button onClick={()=>handleCancel(resetForm)} variant="outlined" color="secondary">
                                        Cancel
                                    </Button>
                                }
                                {step < 3 ?
                                    <Button disabled={!truthy} onClick={()=>handleNext()} type="submit" variant="contained" color="primary" >
                                        Next
                                    </Button>
                                    :
                                    <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" >
                                        Submit
                                    </Button>
                                }
                            </div>
                        </Form>
                    )}}</Formik>
                </div>
            </Container>
            </Modal>}
        </div>
    )
}

export default AddClient;
