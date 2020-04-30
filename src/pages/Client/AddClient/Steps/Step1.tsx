import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Field } from 'formik';

import { Data } from '../addClient.config';

interface IProps {
    errors: Data
    values: Data
}

const Step1: React.FC<IProps> = ({ errors, values }) => {
    const [select, setSelect] = React.useState('');
    const [click, setClick] = React.useState(false);
    const handleChange=(e:any)=>{
       setSelect(e.target.value)
       values.gender = e.target.value;
    }
    
    return (
        <>
            <Field 
                autoFocus 
                fullWidth 
                as={TextField} 
                error={!!errors.name} 
                name="name" 
                placeholder="name" 
                label="name" 
                helperText={errors.name} 
            />
            <Field 
                fullWidth 
                as={TextField} 
                error={!!errors.age} 
                name="age" 
                placeholder="age" 
                label="age" 
                helperText={errors.age} 
            />
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <Field onClick={()=>setClick(!click)} style={{ display: 'initial' }} as={RadioGroup} onChange={handleChange} name="gender" value={select} label="gender">
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </Field>
            </FormControl>
        </>
    )
}

export default Step1;
