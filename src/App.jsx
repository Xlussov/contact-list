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



function App() {
  const [stor, setStor] = useState(
    [{
      avatar : 1,
      email :  "hlusov7@gmail.com" ,
      favorite :  false ,
      gender :  "men" ,
      id :  "6e50bf28-4b95-4258-8451-f28b04bcaf3c" ,
      name :  "Данил Хлусов" ,
      phone : "+380995536140" ,
      status :  "family",
    }]
  )

  const handleNewContact = (newContact) => {
    setStor(prevStor => [...prevStor, newContact])
  }

  const handleDeleteContact = (id) => {
    setStor(prevStor => prevStor.filter(contact => contact.id !== id))
  }

  const handleSetStar = (id) => {
    setStor(prevStore => {
      return prevStore.map(item => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      });
    });
  }
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ContactList stor={stor} onDeleteContact={handleDeleteContact} onselectstart={handleSetStar}/>}/>
          <Route path='/new-contact' element={<NewContant onNewContact={handleNewContact}/>} />
          <Route path='/update-contact' element={<UpdateContact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
