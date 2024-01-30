import './NewContact.scss'

// valid

import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { v4 as uuidv4 } from 'uuid';

const NewContact = () =>{
  const body = document.querySelector('body')
  body.style.backgroundColor = '#fff'
  const initialValues = {
    id: uuidv4(),
    name: '',
    phone: '',
    email: '',
    avatar: '',
    gender: '',
    status: '',
    favorite: false,
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Phone is required'),
    avatar: Yup.string().url('Invalid URL').required('URL is required'),
    gender: Yup.string().oneOf(['men','women'], 'Invalid gender').required('Gender is required'),
    status: Yup.string().oneOf(['work','family','freind', 'private'], 'Status').required('Status is required'),
    favorite: Yup.boolean()
    
  })
  
  const handleSubmit = (values, {setSubmitting}) => {
    console.log(values);
    setSubmitting(true)
  }

   return(
      <div className='container form'>
        <div className="modal-content rounded addPage"></div>
        <div className="modal-header">
          <h1 className='text-center'>Add new contact</h1>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className='input-wrap'>
                <label htmlFor="name">Name</label>
                <Field type='text' name='name' id='name' placeholder='Name'/>
                <ErrorMessage name='name' component='p' className='errorMasege'/>
              </div>
              <div className='input-wrap'>
                <label htmlFor="phone">Phone</label>
                <Field type='text' name='phone' id='phone' placeholder='Phone'/>
                <ErrorMessage name='phone' component='p' className='errorMasege'/>
              </div>
              <div className='input-wrap'>
                <label htmlFor="email">Email</label>
                <Field type='text' name='email' id='email' placeholder='Email'/>
                <ErrorMessage name='email' component='p' className='errorMasege'/>
              </div>
              <div className='input-wrap'>
                <label htmlFor="avatar">Avatar</label>
                <Field type='text' name='avatar' id='avatar' placeholder='Avatar'/>
                <ErrorMessage name='avatar' component='p' className='errorMasege'/>
              </div>
              <div className='input-wrap'>
                <label htmlFor="gender">Gender</label>
                <Field as='select' name='gender' placeholder='Gender'> 
                <option value="" disabled hidden>Choose gender</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                </Field>
                <ErrorMessage name='gender' component='p' className='errorMasege'/>
              </div>
              <div className='input-wrap'>
                <label htmlFor="status">Status</label>
                <Field as='select' name='status'> 
                  <option value="" disabled hidden>Choose status</option>
                  <option value="work">Work</option>
                  <option value="family">Family</option>
                  <option value="freind">Freind</option>
                  <option value="private">Private</option>
                </Field>
                <ErrorMessage name='status' component='p' className='errorMasege'/>
              </div>
              <div className='checkbox-wrap'>
                <label htmlFor="favorite">Favorite</label>
                <Field type='checkbox' name='favorite' id='favorite'/>
                <ErrorMessage name='favorite' component='p' className='errorMasege'/>
              </div>
              <div className="button-wrap">
                <button type='submit' className='btn btn-primary btn-lg' disabled={isSubmitting}>Add new contact</button>
              </div>
            </Form>
          )}
        </Formik>
      </div> 
   )
 }
 
 export default NewContact