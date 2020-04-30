import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Field } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { Data } from '../addClient.config';

interface IProps {
    errors: Data,
    values: Data
}

const Step2: React.FC<IProps> = ({ errors, values }) => {
    const [goal, setGoal] = React.useState('');
    const handleChange = (event: any) => {
        setGoal(event.target.value as string);
        values.goal = event.target.value
      };
    
    return (
        <>
            <Field fullWidth as={TextField} error={!!errors.height} name="height" placeholder="height" label="height in cm" helperText={errors.height} />
            <Field fullWidth as={TextField} error={!!errors.weight} name="weight" placeholder="weight" label="weight in kg" helperText={errors.weight} />
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">goal</InputLabel>
            <Field
                as={Select}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="goal"
                value={goal}
                fullWidth
                onChange={handleChange}
                >
                <MenuItem value={'gain'}>gain</MenuItem>
                <MenuItem value={'lose'}>lose</MenuItem>
                <MenuItem value={'fitness'}>fitness</MenuItem>
            </Field>
            </FormControl>
        </>
    )
}

export default Step2;
