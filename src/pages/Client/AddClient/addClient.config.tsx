import * as yup from 'yup';

export interface Data {
    name: string,
    age: number | "",
    gender: string,
    height: number | "",
    weight: number | "",
    goal: string,
    email: string,
    phone: number | "",
    payment: string
}

export const initialValues: Data = {
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
    email: "",
    phone: "",
    payment: ""
};

export const validationSchema = [
    yup.object({
        name: yup.string().required('Name is required'),
        age: yup.number().positive('age must be greater than zero').required('age is required')
        .min(13,'must be older than 13').max(65, 'must be younger than 65'),
        gender: yup.string().required('gender is required')
    }),
    yup.object({
        height: yup.number().positive('height must be greater than zero').required('height is required'),
        weight: yup.number().positive('weight must be greater than zero').required('weight is required'),
        goal: yup.string().required('goal is required'),
    }),
    yup.object({
        email: yup.string().email().required('email is required'),
        phone: yup.number().required(),
        payment: yup.string()
    }),
];

export const getSteps = () => {
  return ['Personal Detail', 'Body Dimensions', 'Contact and Payment'];
}

export const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return `Please enter details`;
    case 1:
      return 'Please enter details';
    case 2:
      return `Please enter details`;
    default:
      return 'Unknown step';
  }
}

export const trim = (data: any) => {
  return Object.keys(data).map((k: any) => data[k] = data[k].trim());
}

export const capitalizeName = (name: string) => {
  return name.replace(/\b(\w)/g, s => s.toUpperCase());
}