import './ContactList.scss'

import { useState } from 'react'
import ContactItem from '../../components/ContactItem/ContactItem'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ContactList = ({ stor, onDeleteContact, onselectstart }) =>{
  const body = document.querySelector('body')
  body.style.backgroundColor = '#fff'
  // console.log(onDeleteContact);
  const totalContacts = {
    work: 0,
    family: 0,
    private: 0,
    freinds: 0,
  }

  stor.forEach(contact => {
    totalContacts[contact.status] += 1
  })

  return(
    <>
      <div className="ContactList">
        <div className="container rounded">
          <div className="row">
            <Tabs>
              <TabList className='tabList'>
                <Tab className='tab'>All({stor.length})</Tab>
                <Tab className='tab'>Family({stor.length !== null ? totalContacts.family : 0})</Tab>
                <Tab className='tab'>Freinds({stor.length !== null ? totalContacts.freinds : 0})</Tab>
                <Tab className='tab'>Work({stor.length !== null ? totalContacts.work : 0})</Tab>
                <Tab className='tab'>Private({stor.length !== null ? totalContacts.private : 0})</Tab>
              </TabList>

              <TabPanel>
                <ContactItem stor={stor} filterStatus={'all'} onDeleteContact={onDeleteContact} onselectstart={onselectstart}/>
              </TabPanel>
              <TabPanel>
                <ContactItem stor={stor} filterStatus={'family'} onDeleteContact={onDeleteContact} onselectstart={onselectstart}/>
              </TabPanel>
              <TabPanel>
                <ContactItem stor={stor} filterStatus={'freinds'} onDeleteContact={onDeleteContact} onselectstart={onselectstart}/>
              </TabPanel>
              <TabPanel>
                <ContactItem stor={stor} filterStatus={'work'} onDeleteContact={onDeleteContact} onselectstart={onselectstart}/>
              </TabPanel>
              <TabPanel>
                <ContactItem stor={stor} filterStatus={'private'} onDeleteContact={onDeleteContact} onselectstart={onselectstart}/>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
   )
 }
 
 export default ContactList