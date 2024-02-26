import './SettingsBtn.scss'

import settings from '../../img/settings.png'


const SettingsBtn = ({ setAlertOpen, alertOpen }) =>{
  return(
      <div className='settings'>
        <button onClick={() => setAlertOpen(true)}>
          <input type="checkbox" id='openSettings' checked={alertOpen}/>
          <label htmlFor="openSettings">                  
            <img src={settings} alt="settings"/>
          </label>
        </button>
      </div>
   )
 }
 
 export default SettingsBtn






