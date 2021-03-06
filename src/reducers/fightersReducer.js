 const fightersReducer = (state = { fighters: [], loading: false }, action) => {
     
     switch (action.type) {
       case "FETCH_FIGHTERS":
         return {
           ...state,
           fighters: [...state.fighters],
           loading: true,
         };
       case "ADD_FIGHTERS":
         return {
           ...state,
           fighters: action.fighters,
           loading: false,
         };
       default:
         return state;
     }
   };
  


export default fightersReducer;

//const fightersReducer = (state = [], action) => {
//       switch(action.type) {
//               case 'FETCH_FIGHTERS':
//                   return action.payload;
//                  default:
//                      return state;
//           }
//            
//        };
        
//export default fightersReducer;