import { SET_BOOT, ADD_CONTACT, DELETE_CONTACT, CHANGE_FAVORITE, CHANGE_CONTACT, CHANGE_STATUS, ADD_STATUS, DELETE_STATUS, REPLACEMENT_STATUS, CHANGE_STATUS_CARD, SET_FILTERED_CONTACTS} from "./type";

const intialState = {
   contacts: [
      {
         avatar: 1,
         email: "hlusov7@gmail.com",
         favorite: false,
         gender: "men",
         id: "6e50bf28-4b95-4258-8451-f28b04bcaf3c",
         name: "Данил Хлусов",
         phone: "+380995536140",
         status: "family",
         },
         {
         avatar: 2,
         email: "example1@gmail.com",
         favorite: false,
         gender: "women",
         id: "7c8b26a5-0f0e-4fa2-9f03-e85ad0a6d8e1",
         name: "Анна Иванова",
         phone: "+380991234567",
         status: "freinds",
         },
         {
         avatar: 3,
         email: "example2@gmail.com",
         favorite: true,
         gender: "men",
         id: "9a3fecd8-8b8f-471c-b74c-b82c5e80fbfb",
         name: "Иван Петров",
         phone: "+380997654321",
         status: "work",
         },
         {
         avatar: 4,
         email: "example3@gmail.com",
         favorite: true,
         gender: "women",
         id: "c07abbb1-ef17-44b0-916f-b2c5421d4f5d",
         name: "Елена Сидорова",
         phone: "+380998765432",
         status: "private",
         },
         {
         avatar: 5,
         email: "example4@gmail.com",
         favorite: false,
         gender: "men",
         id: "f575aabe-1e6b-470d-8a3b-dc29b5c586b8",
         name: "Павел Николаев",
         phone: "+380996543210",
         status: "family",
         },
         {
         avatar: 6,
         email: "example5@gmail.com",
         favorite: false,
         gender: "women",
         id: "37a9e84e-9515-41b6-a987-5cb5bcb26bb1",
         name: "Мария Васильева",
         phone: "+380999876543",
         status: "freinds",
         },
         {
         avatar: 7,
         email: "example6@gmail.com",
         favorite: true,
         gender: "men",
         id: "5f6a05f8-9c6b-47e5-bd92-5c8bb2ad7f48",
         name: "Алексей Григорьев",
         phone: "+380997654321",
         status: "work",
         },
         {
         avatar: 8,
         email: "example7@gmail.com",
         favorite: true,
         gender: "women",
         id: "9e6c0f34-9300-4d3b-b292-74c5b7c68e09",
         name: "Ольга Дмитриева",
         phone: "+380998765432",
         status: "private",
         },
         {
         avatar: 9,
         email: "example8@gmail.com",
         favorite: false,
         gender: "men",
         id: "b2a8cadd-3f16-4029-a5b5-0c31c6ef9f2a",
         name: "Андрей Кузнецов",
         phone: "+380996543210",
         status: "family",
         },
         {
         avatar: 10,
         email: "example9@gmail.com",
         favorite: false,
         gender: "women",
         id: "ad33f165-915e-4e47-b0e8-77c5d94fc48c",
         name: "Татьяна Смирнова",
         phone: "+380999876543",
         status: "freinds",
         },
         {
         avatar: 11,
         email: "example10@gmail.com",
         favorite: true,
         gender: "men",
         id: "2e0d9e9e-810f-4d29-b7ef-2bb90a2584d6",
         name: "Сергей Иванов",
         phone: "+380997654321",
         status: "work",
         },
         {
         avatar: 12,
         email: "example11@gmail.com",
         favorite: true,
         gender: "women",
         id: "e360803b-4b2a-4e76-8f21-8d94f33d5d0f",
         name: "Екатерина Петрова",
         phone: "+380998765432",
         status: "private",
         },
         {
         avatar: 13,
         email: "example12@gmail.com",
         favorite: false,
         gender: "men",
         id: "76e5906e-12b4-4182-a0e5-94f5f031fc6f",
         name: "Владимир Сидоров",
         phone: "+380996543210",
         status: "family",
         },
         {
         avatar: 14,
         email: "example13@gmail.com",
         favorite: false,
         gender: "women",
         id: "a3c56a78-8420-4b61-b0dd-f7943d4b7275",
         name: "Наталья Васильева",
         phone: "+380999876543",
         status: "freinds",
         },
         {
         avatar: 15,
         email: "example14@gmail.com",
         favorite: true,
         gender: "men",
         id: "ea6a70e9-7038-4c5b-b7d6-8c02c6d3b7b9",
         name: "Максим Григорьев",
         phone: "+380997654321",
         status: "work",
         },
         {
         avatar: 16,
         email: "example15@gmail.com",
         favorite: true,
         gender: "women",
         id: "b1740180-858f-4bc3-9325-c8b00c4b9a9b",
         name: "Ирина Дмитриева",
         phone: "+380998765432",
         status: "private",
         },
         {
         avatar: 17,
         email: "example16@gmail.com",
         favorite: false,
         gender: "men",
         id: "b0a31257-0b2d-41f6-b6a6-1f08e4e1687c",
         name: "Артем Кузнецов",
         phone: "+380996543210",
         status: "family",
         },
         {
         avatar: 18,
         email: "example17@gmail.com",
         favorite: false,
         gender: "women",
         id: "f4eb4f1c-cf0d-46cb-837d-f0c5e6ff6e8e",
         name: "Елена Смирнова",
         phone: "+380999876543",
         status: "freinds",
         },
         {
         avatar: 19,
         email: "example18@gmail.com",
         favorite: true,
         gender: "men",
         id: "29aa5d3b-cbcf-4db8-84ed-15733a92a590",
         name: "Игорь Иванов",
         phone: "+380997654321",
         status: "work",
         },
         {
         avatar: 20,
         email: "example19@gmail.com",
         favorite: true,
         gender: "women",
         id: "c62a3d7b-9cbf-4cbb-a4d3-7d9ad975b73c",
         name: "Александра Петрова",
         phone: "+380998765432",
         status: "private",
         },
   ],

   filteredContacts: [],

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

      case SET_FILTERED_CONTACTS:
         return{
            ...state,
            filteredContacts: action.payload,
         }
       

      default: 
         return state
   }
} 

export default reducer
