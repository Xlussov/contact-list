import './Footer.scss'

import { Link } from "react-router-dom"


const Footer = () =>{
   return(
    <footer>
      <div className="container rounded">
        <div className="row">
          <hr />
          <div className="footer-container">
              <div className="footer-links">
                  <ul>
                    <li><Link className="navbar-brand" to='/contact-list/'>Contact list</Link></li>
                    <li><Link className="navbar-brand" to='/contact-list/new-contact'>Add new contact</Link></li>
                  </ul>
              </div>
              <div className="footer-contact">
                  <p>Contact Information:</p>
                  <p>Phone: +1 (XXX) XXX-XXXX</p>
                  <p>Email: info@example.com</p>
              </div>
          </div>
          <div className="footer-bottom">
              <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
   )
 }
 
 export default Footer