import './ContactItem.scss';
import { useSelector, useDispatch } from 'react-redux'; 

import { changeFavorite, deleteContact } from '../../redux/actions'; 

import { Link } from "react-router-dom"

import fillNone from '../../img/fill-none.svg'
import fillYelow from '../../img/fill-yellow.svg'
import change from '../../img/change.svg'
import bin from '../../img/bin.svg'



const ContactItem = ({filterStatus}) => {
  const imgSrc = (num, gender) => {
    return `https://randomuser.me/api/portraits/${gender}/${num}.jpg`
  }

  const contacts = useSelector(state => state.filteredContacts)
  const dispatch = useDispatch()

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id))
  }

  const setStar = (id) => {
    dispatch(changeFavorite(id))
  }

  return (
    <div className='contactItem'>
      {contacts.map((contact) => (
        contact.status === filterStatus || filterStatus === 'all' ? (
          <div className='personWrap' key={contact.id}>
            <div className="imgWraper">
              <img src={imgSrc(contact.avatar,contact.gender)} alt="avatar" />
            </div>
            <div className='personInfo'>
              <div className='mainInfo'>
                <h3 className='df'>{contact.name}</h3>
                <div>
                  <p className='status'>{contact.status}</p>
                  <img src={contact.favorite === true ? fillYelow : fillNone} alt="star" onClick={() => setStar(contact.id)}/>
                  <Link to={`/contact-list/update-contact/${contact.id}`}>
                    <img src={change} alt="change"/>
                  </Link>
                  <img src={bin} alt="bin" onClick={() => handleDeleteContact(contact.id)}/>
                </div>
              </div>
              <p><span>Email:</span> {contact.email}</p>
              <p><span>Number:</span> {contact.phone}</p>
            </div>
          </div>
        ) : null
      ))}
    </div>
  );
};

export default ContactItem;