import './NewContact.scss'
// valid
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'

import { v4 as uuidv4 } from 'uuid';

import { Link } from "react-router-dom"

import Successmark from '../../img/Successmark.svg'


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
    name: Yup.string().min(2,'The name cannot be less than 2 characters')
    .max(30,'The name cannot be more than 30 characters')
    .matches(/^[^\d]*$/, 'The name cannot include numbers').required('Name is required'),

    phone: Yup.string()
    .matches(/^\+[0-9]+$/, 'Phone number must contain only digits')
    .min(3, 'The phone number cannot be less than 3 characters')
    .max(13, 'The phone number cannot be more than 12 characters')
    .required('Phone is required'),

    email: Yup.string().email('Invalid email').required('Phone is required'),
    avatar: Yup.string().url('Invalid URL').required('URL is required'),
    gender: Yup.string().oneOf(['men','women'], 'Invalid gender').required('Gender is required'),
    status: Yup.string().oneOf(['work','family','freind', 'private'], 'Invalid status').required('Status is required'),
    favorite: Yup.boolean()
    
  })

  const alert = () => {
    const alertWrap = document.querySelector('.alert')
    alertWrap.style.display = 'flex'
    setTimeout(()=> {
      alertWrap.style.display = 'none'
      document.location = '/new-contact'
    },3500)
  }
  
  const handleSubmit = (values, {setSubmitting}) => {
    console.log(values);
    if(values){
      alert()
    }
    setSubmitting(true)
  }
   
  return(
      <div className='container form'>
        <div className="alert">
          <div className="text-block">
            <img src={Successmark} alt="Successmark"/>
            <h2>Successfull</h2>
            <p>You have added a new contact</p>
            <div className='btn-wrap'>
              <div className="btn">
                <Link className="link" to='/'>Back to home</Link>
              </div>
            </div>
          </div>
        </div>
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
                <Field className='checkbox' type='checkbox' name='favorite' id='favorite'/>
                <label htmlFor="favorite">
                  <span className='star'></span>
                  <p>Add contact to favorite</p>
                </label>
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