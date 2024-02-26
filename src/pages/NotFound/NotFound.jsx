import './NotFound.scss'
import { Link } from "react-router-dom"
import Astronaut from '../../img/Astronaut.svg'
import star from '../../img/star.svg'
import rock1 from '../../img/rock1.svg'
import rock2 from '../../img/rock2.svg'



const NotFound = () =>{
  const body = document.querySelector('body')
  body.style.backgroundColor = 'black'
   return(
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <section className='notFound'>
              <div className="notFound__content">
                <h1>404-error</h1>
                <h2>PAGE NOT FOUND</h2>
                <p>Your search has ventured beyond the known universe.</p>
                <div className="btn-wrap">
                  <div className="btn">
                    <Link className="link" to='/contact-list/'>Back To Home</Link>
                  </div>
                </div>
              </div>
              <div className="notFound__astronaut">
                <img className='astronaut' src={Astronaut} alt="Astronaut" />
                <img className='star1' src={star} alt="Star" />
                <img className='star2' src={star} alt="Star" />
                <img className='rock1' src={rock1} alt="Rock" />
                <img className='rock2' src={rock2} alt="Rock" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
   )
 }
 
export default NotFound