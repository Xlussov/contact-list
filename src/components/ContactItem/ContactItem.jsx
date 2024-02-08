import './ContactItem.scss';
import fillNone from '../../img/fill-none.svg'
import fillYelow from '../../img/fill-yellow.svg'
import change from '../../img/change.svg'
import bin from '../../img/bin.svg'

const ContactItem = ({ stor, filterStatus, onDeleteContact, onselectstart }) => {
  const imgSrc = (num, gender) => {
    return `https://randomuser.me/api/portraits/${gender}/${num}.jpg`
  }

  const deleteContact = (id) => {
    onDeleteContact(id)
  }

  const setStar = (id) =>{
    onselectstart(id)
  }

  return (
    <div className='contactItem'>
      {stor.map((contact) => (
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
                  <img src={change} alt="change"/>
                  <img src={bin} alt="bin" onClick={() => deleteContact(contact.id)}/>
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