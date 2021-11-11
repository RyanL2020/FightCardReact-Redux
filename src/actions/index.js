export const fetchFighters = () => {
    return(dispatch) => {   
        //debugger 
        //dispatch({ type: "FETCH_FIGHTERS"});
         fetch("http://localhost:3000/fighters")
        .then((response) => {
            return response.json();
        }) 
        .then((fighters) => {
       
            console.log(fighters)
        dispatch({ type: "FETCH_FIGHTERS", fighters: fighters})
        
    })
};
};







//import fighterData from "../api/fighterData";
//
//export const fetchFighters = () =>  async dispatch => {
//    const response = await fighterData.get('/fighters');
//
//    dispatch({ type: 'FETCH_FIGHTERS', payload: response.data })
//};