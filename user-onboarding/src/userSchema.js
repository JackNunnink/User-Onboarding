import * as yup from 'yup';

const userSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(3, 'Has to be more than three characters'),

    email: yup
    .string()
    .email('Has to be a valid email')
    .required('Please enter an email'),
    
    password: yup
    .string()
    .trim()
    .required('A password is required'),

    tos: yup
    .boolean()
    .oneOf([true], 'Must accept terms of service')
})

export default userSchema;