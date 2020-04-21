import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import yup from 'yup';

import Modal from 'src/components/Modal'
import Form from 'src/components/Form'; 


const initialValues = {
    name: "",
    age: 0,
    height: 0,
    weight: 0,
    gender: "",
    email: "",
    goal: "",
    birth: ""
}

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    age: yup.number().required('age is required').min(13).max(65),
    height: yup.number().required('height is required').min(0).max(250),
    weight: yup.number().required('weight is required').min(0).max(600),
    gender: yup.string().required('gender is required'),
    email: yup.string().email().required('email is required'),
    goal: yup.string().required('goal is required'),
    birth: yup.number().required('birth is required')
})

const handleSubmit = () => {

}

const AddClient = () => {
    
    const [create, setCreate] = useState<boolean>(false);
    const ModalFooter = (
        <Button onClick={()=>setCreate(!create)} variant="contained" color="secondary">
            Cancel
        </Button>
    )
    return (
        <div>
            {
            !create ?
            <Button onClick={()=>setCreate(!create)} variant="contained" color="primary">
                Add Client
            </Button>
            :
            <Modal
                header="Add Client"
                footer={ModalFooter}
            >
                <Form
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    submitButton="Submit"
                    handlingSubmit={handleSubmit}
                >
                    
                </Form>
            </Modal>
            }
        </div>
    )
}

export default AddClient;
