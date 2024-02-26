import { SET_BOOT, ADD_CONTACT, DELETE_CONTACT, CHANGE_FAVORITE, CHANGE_CONTACT, CHANGE_STATUS, ADD_STATUS, DELETE_STATUS, REPLACEMENT_STATUS, CHANGE_STATUS_CARD, } from "./type";

const intialState = {
   contacts: [
      {
         avatar : 1,
         email :  "hlusov7@gmail.com" ,
         favorite :  false ,
         gender :  "men" ,
         id :  "6e50bf28-4b95-4258-8451-f28b04bcaf3c" ,
         name :  "Данил Хлусов" ,
         phone : "+380995536140" ,
         status :  "family",
       },
   ],
   status: [
      'all', 'family', 'freinds', 'work', 'private',
   ],


   BOOT: [
      // {
      //    id: false,
      // },
   ],
}
 

const reducer = (state = intialState, action) => {
   switch (action.type){
      case SET_BOOT:
         return {
            ...state,
            BOOT: state.BOOT.some(object => object.id === action.payload.id) ?
              state.BOOT.map(object => 
                object.id === action.payload.id ? action.payload : object
              ) :
              [...state.BOOT, action.payload]
          };

      case ADD_CONTACT:
         return{
            ...state,
            contacts: [...state.contacts, action.payload]
         }

      case DELETE_CONTACT:
         return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
         }

      case CHANGE_FAVORITE:
         return {
            ...state,
            contacts: state.contacts.map(item => {
               if (item.id === action.payload) {
                 return { ...item, favorite: !item.favorite };
               }
               return item;
            })
         }

      case CHANGE_CONTACT:
         return{
            ...state,
            contacts: state.contacts.map(item => {
               if (item.id === action.payload.id) {
                  return action.payload
               }
               return item;
            })
         }

      case CHANGE_STATUS:
         return{
            ...state,
            status: state.status.map(statusItem => {
               if(statusItem === state.status[action.payload.id]){
                  return action.payload.newSatatus
               }
               return statusItem;
            })
         }

      case ADD_STATUS:
         return{
            ...state,
            status: [
               ...state.status,
               action.payload
            ]
         }

      case DELETE_STATUS:
         const updatedStatus = [...state.status]; 
         updatedStatus.splice(action.payload, 1); 
         return {
           ...state,
           status: updatedStatus 
         }

      
      case REPLACEMENT_STATUS:     
         return {
           ...state,
           status: action.payload
         }

      case CHANGE_STATUS_CARD:
        const { oldStatus, newStatus } = action.payload; 
        const updatedItems = state.contacts.map(item => {
            if (item.status === oldStatus) {
                return {
                    ...item,
                    status: newStatus
                };
            }
            return item;
        })

        return {
         ...state,
         contacts: updatedItems
       }
       

      default: 
         return state
   }
} 

export default reducer
