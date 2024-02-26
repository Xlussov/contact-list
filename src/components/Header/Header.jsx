import './Header.scss'
import search from '../../img/search.svg'
import { Link } from "react-router-dom"

const Header = () =>{
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
              <input type="text" className="form-control" placeholder="Search..."/>
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