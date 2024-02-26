import './SettingsAlert.scss'

import { useSelector, useDispatch } from 'react-redux'; 

import { useEffect, useState } from 'react'; 

import close from '../../img/close.png'

import addNew from '../../img/addNew.png'

import bin from '../../img/bin.svg'

import { changeStatus, setBoot, addStatus, deleteStatus, replacement_status, changeStatusCard } from '../../redux/actions.js'


const SettingAlert = ({setAlertOpen}) =>{

  const contacts = useSelector(state => state.contacts)
  const status = useSelector(state => state.status)
  const BOOT = useSelector(state => state.BOOT)

  const dispatch = useDispatch()

  const totalContacts = {}

  status.forEach(status => {
    totalContacts[status] = 0
  })

  contacts.forEach(contact => {
    totalContacts.all += 1
    totalContacts[contact.status] += 1
  })


  useEffect(()=>{
    const bootStatus = status.slice();
    const newStatusName = {
      id: 'newStatusName', 
      changeValue: [...bootStatus] 
    };
    dispatch(setBoot(newStatusName))
  },[])
  


  const [statusesNames, setStatusNames] = useState(status.map((status) => status));

  const correctInput = () => {
    const bootRequest = BOOT.find(item => item.id === 'newStatusName')
    if(bootRequest !== undefined){
      const newStatuses = bootRequest.changeValue
      setStatusNames(newStatuses);
    }
  }


  const correctName = (i, newStatuses) => {
    newStatuses[i] = status[i]
    const newStatusName = {
      id: 'newStatusName', 
      changeValue: [...newStatuses] 
    };
    dispatch(setBoot(newStatusName))
  }

  const compareAndAppend = (value, comparisonArray) => {
    if (!comparisonArray.includes(value + 1)) {
      return 1;
    }

    for (let i = 1; i <= comparisonArray.length + 1; i++) {
      if (!comparisonArray.includes(value + i)) {
          return i;
      }
    }

    return -1;
  }



  const unDubbleDName = (i, newStatuses) => {
    const num = compareAndAppend(newStatuses[i], newStatuses) 

    newStatuses[i] = `${newStatuses[i]}${num}`
    const newStatusName = {
      id: 'newStatusName', 
      changeValue: [...newStatuses] 
    };
    dispatch(setBoot(newStatusName))

    setStatusNames(newStatuses);
  }


  const replaceCardStatus = (newStatuses) => {
    for(let i = 0; i < status.length; i++){
      if(newStatuses[i] !== status[i]){
        dispatch(changeStatusCard(status[i], newStatuses[i]))
      }
    }
  }

  const validateForm = () => {
    const bootRequest = BOOT.find(item => item.id === 'newStatusName')
    if(bootRequest !== undefined){
      const newStatuses = bootRequest.changeValue
      let checked = true
      for(let i = 0; i <= newStatuses.length - 1; i++){
        checked = true

        if(newStatuses[i] === '' || newStatuses[i] === undefined){
          correctName(i, newStatuses)
          correctInput()
          checked = false
          break
        }
        
        for(let r = 0; r < newStatuses.length; r++){
          if(i !== r && newStatuses[i] !== status[i] && newStatuses[i] === newStatuses[r] ){
            unDubbleDName(i, newStatuses)
          }
        }

        
        if(i === newStatuses.length - 1 && checked !== false){
          replaceCardStatus(newStatuses)
          setAlertOpen(false)
          dispatch(replacement_status(newStatuses))
        }
      }
    }else{
      setAlertOpen(false)
    }
  }


  const addNewCategories = () => {
    const bootRequest = BOOT.find(item => item.id === 'newStatusName')
    if(bootRequest !== undefined){
      const newStatuses = bootRequest.changeValue

      const num = compareAndAppend('undefined', newStatuses) 
      const newValue = `undefined${num}`

      newStatuses.push(newValue)
      const newStatusName = {
        id: 'newStatusName', 
        changeValue: [...newStatuses] 
      };
      dispatch(setBoot(newStatusName))
      dispatch(addStatus(newValue))

      const newCategories = statusesNames
      newCategories.push(newValue)
      setStatusNames(newCategories)
    }
  }
  

  const deleteCategori = (index) => {
    const bootRequest = BOOT.find(item => item.id === 'newStatusName')
    if(bootRequest !== undefined){
      const newStatuses = bootRequest.changeValue

      newStatuses.splice(index,1)

      const newStatusName = {
        id: 'newStatusName', 
        changeValue: [...newStatuses] 
      };
      dispatch(setBoot(newStatusName))
      dispatch(deleteStatus(index))

      const newCategories = statusesNames
      newCategories.splice(index,1)
      setStatusNames(newCategories)

      console.log(newCategories);
    }
  }



  const setNames = (e,index) => {
    const bootRequest = BOOT.find(item => item.id === 'newStatusName')
    if(bootRequest !== undefined){
      const newStatuses = bootRequest.changeValue

      const newStatusNames = [...statusesNames];
      newStatusNames[index] = e.target.value;
      setStatusNames(newStatusNames);
  

      const validData = e.target.value.trim();
      newStatuses[index] = validData
      const newStatusName = {
        id: 'newStatusName', 
        changeValue: [...newStatuses] 
      };
      dispatch(setBoot(newStatusName))
      
    }else{
      const bootStatus = status.slice();
      const newStatusName = {
        id: 'newStatusName', 
        changeValue: [...bootStatus] 
      };
      dispatch(setBoot(newStatusName))
    }
  }


  const [ showBin, setShowBin ] = useState({status: false, index: 0})
  return(
   <div className='settingAlert'>
      <div className='wrap'>
        <div className='settings-window'>
            <nav>
              <h4>Change category</h4>
              <button onClick={validateForm}>
                <img src={close} alt="close" />
              </button>
            </nav>
            <div className='content' >
              <ul>
                {status.map((status, index) => (
                  <li key={index} className={'listPath' + index}>
                    <input
                      type="text"
                      value={statusesNames[index]}
                      onChange={e => {setNames(e,index)}}
                      maxLength="17"
                      onFocus={()=> setShowBin({status: true, index: index})}
                    />
                    {showBin.status && showBin.index === index ? 
                      <img src={bin} alt="bin" onClick={() => deleteCategori(index)} />
                    : ''}
                  </li>
                ))}
                {status.length <= 10 && (
                  <li className='addNewCategory' onClick={addNewCategories}>
                    <img src={addNew} alt="add new"/>
                    <span>Add new</span>
                  </li>
                )}
              </ul>
            </div>
        </div>
      </div>
   </div>
   )
 }
 
 export default SettingAlert




