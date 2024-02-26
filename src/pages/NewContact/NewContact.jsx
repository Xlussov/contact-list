import './NewContact.scss'
// valid
import {Formik, Form, Field, ErrorMessage} from 'formik'

import { v4 as uuidv4 } from 'uuid';

import { Link } from "react-router-dom"

import Successmark from '../../img/Successmark.svg'

import { validationSchema } from './Validation/validation.js'

import { useDispatch, useSelector } from 'react-redux'; 

import { addContact } from '../../redux/actions.js';

const NewContact = () =>{
  // const xhr = new XMLHttpRequest();

  // // Открываем соединение с сервером и указываем метод запроса и URL-адрес файла
  // xhr.open('GET','https://drive.google.com/file/d/1Y73FdVv3WNh6HEDfH98jl4FXQGAd0vVO/view?usp=sharing', true);

  // // Отправляем запрос на сервер
  // xhr.send();

  // // Назначаем обработчик события загрузки файла
  // xhr.onload = function() {
  // if (xhr.status === 200) {
  //     // Если файл успешно загружен, получаем его содержимое
  //   const fileContent = xhr.responseText;

  //    const regex = /https:\/\/\S+/g; // Регулярное выражение для поиска строк, начинающихся с "https://"
  //    const matches = fileContent.match(regex); // Находим все совпадения

  //    if (matches) {
  //         const str = matches[7].split(',')[0].split('"')[0]
  //         const lastSlashIndex = str.lastIndexOf('/');
  //         console.log(str.split(`\\`)[0]);      
  //    } else {
  //        console.log("Не найдено ни одной строки, начинающейся с 'https://'");
  //    }
  // }
// }


  const dispatch = useDispatch()
  const status = useSelector(state => state.status)

  const body = document.querySelector('body')
  body.style.backgroundColor = '#fff'

  const validationSchemaInt = validationSchema(status)


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

  const alert = () => {
    const alertWrap = document.querySelector('.alert')
    alertWrap.style.display = 'flex'
    setTimeout(()=> {alertWrap.style.display = 'none'},3500)
  }

  const handleSubmit = (values) => {
    if(values) alert()

    dispatch(addContact(values))

    setTimeout(()=> {
      resetForm()
      setSubmitting(false)
    },3500)
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
                  {/* <option value="work">Work</option>
                  <option value="family">Family</option>
                  <option value="freinds">Freinds</option>
                  <option value="private">Private</option> */}
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