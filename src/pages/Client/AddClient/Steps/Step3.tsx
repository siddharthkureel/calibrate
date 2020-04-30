import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Field } from 'formik';

import { Data } from '../addClient.config';

interface IProps {
    errors: Data
}

const Step3: React.FC<IProps> = ({ errors }) => {
    return (
        <>
            <Field fullWidth as={TextField} error={!!errors.email} name="email" placeholder="email" label="email" helperText={errors.email} />
            <Field fullWidth as={TextField} error={!!errors.phone} name="phone" placeholder="phone" label="phone" helperText={errors.phone} />
            <Field fullWidth as={TextField} error={!!errors.payment} name="payment" placeholder="payment" label="payment" helperText={errors.payment} />      
        </>
    )
}

export default Step3;
