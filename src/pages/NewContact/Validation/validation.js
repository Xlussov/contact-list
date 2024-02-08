import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
   name: Yup.string().min(2,'The name cannot be less than 2 characters')
   .max(30,'The name cannot be more than 30 characters')
   .matches(/^[^\d]*$/, 'The name cannot include numbers').required('Name is required'),

   phone: Yup.string()
   .min(4, 'The phone number cannot be less than 3 characters')
   .max(13, 'The phone number cannot be more than 12 characters')
   .matches(/^\+[0-9]+$/, 'Phone number must contain only digits')
   .required('Phone is required'),

   email: Yup.string().email('Invalid email').required('Phone is required'),
   avatar: Yup.number().min(1,'Min icon num is 1').max(99,'Max icon num is 99').required('URL is required'),
   gender: Yup.string().oneOf(['men','women'], 'Invalid gender').required('Gender is required'),
   status: Yup.string().oneOf(['work','family','freinds', 'private'], 'Invalid status').required('Status is required'),
   favorite: Yup.boolean()
   
})

