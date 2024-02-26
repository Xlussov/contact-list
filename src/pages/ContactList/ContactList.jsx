import './ContactList.scss'

import { useSelector } from 'react-redux'; 

import ContactItem from '../../components/ContactItem/ContactItem'

import SettingAlert from '../../components/settingsAlert/SettingsAlert'

import SettingsBtn from '../../components/SettingsBtn/settingsBtn';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useState } from 'react';


const ContactList = ({ }) =>{
  const body = document.querySelector('body')
  body.style.backgroundColor = '#fff'

  const contacts = useSelector(state => state.contacts)
  const status = useSelector(state => state.status)

  const totalContacts = {}

  status.forEach(status => {
    totalContacts[status] = 0
  })

  contacts.forEach(contact => {
    totalContacts.all += 1
    totalContacts[contact.status] += 1
  })

  const [ alertOpen, setAlertOpen ] = useState(false)

  return(
    <>
      <div className="ContactList">
        {alertOpen ? <SettingAlert setAlertOpen={setAlertOpen} /> : ''}
        <div className="container rounded">
          <div className="row">
            <Tabs>
              <div className='tabWraper'>
                <TabList className='tabList'>
                  {status.map(status => (
                    <Tab className='tab'>{status}({contacts.length !== null ? totalContacts[status] : 0})</Tab>
                  ))}
                </TabList>

                <SettingsBtn setAlertOpen={setAlertOpen} alertOpen={alertOpen}/>
              </div>
              {status.map((status) => (
                <TabPanel>
                  <ContactItem filterStatus={status}/>
                </TabPanel>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
   )
 }
 
 export default ContactList






