import './Header.scss'
import search from '../../img/search.svg'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredContacts } from '../../redux/actions';



const Header = () =>{

  const dispatch = useDispatch()
  const [ searhValue, setSearchValue ] = useState('')

  const contacts = useSelector(state => state.contacts)

  const filteredContacts = contacts.filter(contact => {
    if(contact.name.toLowerCase().includes(searhValue.toLowerCase()) ||
     contact.email.toLowerCase().includes(searhValue.toLowerCase())){
      return contact
    }
  })


  dispatch(setFilteredContacts(filteredContacts))
  

   return(
    <header>
      <div className="container rounded">
        <div className="row">
          <div className="header-wraper">
            <div className="header-links">
              <Link className="navbar-brand" to='/contact-list/'>Contact List</Link>
              <Link className="navbar-brand" to='/contact-list/new-contact'>Add new</Link>
            </div>
            <div className="header-search">
              <input onChange={(event) => setSearchValue(event.target.value)} type="text" className="form-control" placeholder="Search..."/>
              <img src={search} alt="search"/>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </header>
   )
 }
 
 export default Header