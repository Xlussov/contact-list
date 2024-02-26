import { useState } from 'react'

import './App.scss'

//import react-router-dom
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//import componets
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import ContactList from './pages/ContactList/ContactList'
import NewContant from './pages/NewContact/NewContact'
import UpdateContact from './pages/UpdateContact/UpdateContact'
import NotFound from './pages/NotFound/NotFound'

import { Provider } from 'react-redux'
import store from './store.js'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/contact-list' element={<ContactList />}/>  
          <Route path='/contact-list/new-contact' element={<NewContant/>} />
          <Route path='/contact-list/update-contact/:id' element={<UpdateContact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  )
}

export default App
