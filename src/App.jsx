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
  const [count, setCount] = useState(0)
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ContactList />}/>
          <Route path='/new-contact' element={<NewContant/>} />
          <Route path='/update-contact' element={<UpdateContact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
