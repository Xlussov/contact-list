import { SET_BOOT, ADD_CONTACT, DELETE_CONTACT, CHANGE_FAVORITE, CHANGE_CONTACT, CHANGE_STATUS, ADD_STATUS, DELETE_STATUS, REPLACEMENT_STATUS, CHANGE_STATUS_CARD} from "./type";

export const setBoot = (object) => {
   return {
      type: SET_BOOT,
      payload: object,
   }
}



export const addContact = (newContact) => {
   return {
      type: ADD_CONTACT,
      payload: newContact,
   }
}


export const deleteContact = (id) => {
   return {
      type: DELETE_CONTACT,
      payload: id,
   }
}

export const changeFavorite = (id) => {
   return{
      type: CHANGE_FAVORITE,
      payload: id,
   }
}

export const changeContact = (updateContact) => {
   return{
      type: CHANGE_CONTACT,
      payload: updateContact,
   }
}

export const changeStatus = (id, newSatatus) => {
   return {
      type: CHANGE_STATUS,
      payload: { id, newSatatus },
   }
}


export const addStatus = (newSatatus) => {
   return {
      type: ADD_STATUS,
      payload: newSatatus,
   }
}

export const deleteStatus = (index) => {
   return {
      type: DELETE_STATUS,
      payload: index,
   }
}

export const replacement_status = (arr) => {
   return {
      type: REPLACEMENT_STATUS,
      payload: arr,
   }
}

export const changeStatusCard = (oldStatus, newStatus) => {
   return {
      type: CHANGE_STATUS_CARD,
      payload: { oldStatus, newStatus },
   }
}


