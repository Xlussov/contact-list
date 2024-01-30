import './Header.scss'
import search from '../../img/search.svg'
import { Link } from "react-router-dom"

const Header = () =>{
   return(
    <header>
      <div className="container rounded">
        <div className="row">
          {/* <div className="col-4">
            <Link className="navbar-brand fs-3" to='/'>
              Contact List
            </Link>
            <Link className="navbar-brand fs-5 ms-6" to='/new-contact'>
              Add new
            </Link>
          </div>
          <div className="col-4"></div>
          <div className="navbar-form navbar-right col-4">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
          </div> */}
          <div className="header-wraper">
            <div className="header-links">
              <Link className="navbar-brand" to='/'>Contact List</Link>
              <Link className="navbar-brand" to='/new-contact'>Add new</Link>
            </div>
            <div className="header-search">
              <input type="text" className="form-control" placeholder="Search..."/>
              <img src={search} alt="search"/>
            </div>
          </div>
        </div>
      </div>
    </header>
   )
 }
 
 export default Header