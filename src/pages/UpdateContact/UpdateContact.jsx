import '../NewContact/NewContact.scss'

// valid
import {Formik, Form, Field, ErrorMessage} from 'formik'

import { changeContact } from '../../redux/actions.js' 

import { useNavigate, useParams} from "react-router-dom"

import { validationSchema } from '../NewContact/Validation/validation.js'

import { useSelector , useDispatch } from 'react-redux'; 



const UpdateContact = () =>{
  const dispatch = useDispatch()

  const body = document.querySelector('body')
  body.style.backgroundColor = '#fff'


  const { id } = useParams()

  const status = useSelector(state => state.status)
  const contacts = useSelector(state => state.contacts)
  
  const contact = contacts.find(contact => contact.id === id)

  const validationSchemaInt = validationSchema(status)

  const initialValues = {
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    avatar: contact.avatar,
    gender: contact.gender,
    status: contact.status,
    favorite: contact.favorite
  }

  const navigate = useNavigate()

  const handleSubmit = (values) => {
    dispatch(changeContact(values))
    navigate('/')
  }

   return(
    <div className='container form'>
      <div className="modal-header">
        <h1 className='text-center'>Update a contact</h1>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchemaInt} onSubmit={handleSubmit}>
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
              {status.map(status => {
                  if(status === 'all'){
                    return
                  }else {
                    return (
                      <option value={status}>{status}</option>
                    )
                  }
                }
              )}
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
            <button type='submit' className='btn btn-primary btn-lg' disabled={isSubmitting}>Change contact</button>
          </div>
        </Form>
        )}
      </Formik>
    </div> 
   )
 }
 
 export default UpdateContact


// import './UpdateContact.scss'

// //valid
// import {Formik, Form, Field, ErrorMessage} from 'formik'
// import { validationSchema } from '../../assets/validation/Validation'

// import { useNavigate, useParams } from 'react-router-dom'

// // eslint-disable-next-line react/prop-types
// const UpdateContact = ({ stor, onUpdateConstac }) =>{

//   const { id } = useParams()

//   const contact = stor.find(contact => contact.id === id)


//   const initialValues = {
//     id: contact.id,
//     name: contact.name,
//     phone: contact.phone,
//     email: contact.email,
//     avatar: contact.avatar,
//     gender: contact.gender,
//     status: contact.status,
//     favorite: contact.favorite
//   }


//   const navigate = useNavigate()

//   const handleSubmit = (values) => {
//     if (contact !== values) {
//       onUpdateConstac(values)
//     }
//     navigate('/')
//   }

//   return(
//     <div className="container">
//       <div className="rounded AddPage shadow-lg">
//         <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={handleSubmit}>
//           {({ isSubmitting }) => (
//             <Form>
//               <h1 className='text-center'>Edit Contact</h1>
//               <hr />
//               <div className='m-4'>
//                 <label htmlFor='name'>Name</label>
//                 <Field className='form-control fs-5' type='text' name='name' id='name'/>
//                 <ErrorMessage name='name' component='p' className='text-danger position-absolute' />
//               </div>
//               <div className='m-4'>
//                 <label htmlFor='phone'>Phone</label>
//                 <Field className='form-control fs-5' type='text' name='phone' id='phone'/>
//                 <ErrorMessage name='phone' component='p' className='text-danger position-absolute'/>
//               </div>
//               <div className='m-4'>
//                 <label htmlFor='email'>Email</label>
//                 <Field className='form-control fs-5' type='email' name='email' id='email'/>
//                 <ErrorMessage name='email' component='p' className='text-danger position-absolute'/>
//               </div>
//               <div className='m-4'>
//                 <label htmlFor='avatar'>Avatar</label>
//                 <Field className='form-control fs-5' type='number' name='avatar' id='avatar' min={0} max={99}/>
//                 <ErrorMessage name='avatar' component='p' className='text-danger position-absolute'/>
//               </div>
//               <div className='m-4'>
//                 <label htmlFor='gender'>Gender</label>
//                 <Field className='form-control fs-5' as='select' name='gender' placeholder='Choose gender'>
//                   <option value=''>Choose gender</option>
//                   <option value='men'>Men</option>
//                   <option value='women'>Women</option>
//                 </Field>
//                 <ErrorMessage name='gender' component='p' className='text-danger position-absolute'/>
//               </div>

//               <div className='m-4'>
//                 <label htmlFor='status'>Status</label>
//                 <Field className='form-control fs-5' as='select' name='status'>
//                   <option value=''>Choose status</option>
//                   <option value='Work'>Work</option>
//                   <option value='Family'>Family</option>
//                   <option value='Private'>Private</option>
//                   <option value='Friends'>Friends</option>
//                 </Field>
//                 <ErrorMessage name='status' component='p' className='text-danger position-absolute'/>
//               </div>
//               <div className='m-4'>
//                 <label htmlFor='favorite' className='form-check-label fs-5'>Favorit</label>
//                 <Field className='form-check-input m-1 fs-4' type='checkbox' name='favorite' id='favorite'/>
//                 <ErrorMessage name='favorite' component='p' className='text-danger position-absolute'/>
//               </div>
//               <div className="m-4">
//               <button type='submit' className='btn btn-primary btn-lg form-control' disabled={isSubmitting}>Save</button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   )
// }

// export default UpdateContact