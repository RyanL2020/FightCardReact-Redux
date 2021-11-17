export const fetchFighters = () => {
    return(dispatch) => {   
        //debugger 
        //dispatch({ type: "FETCH_FIGHTERS"});
         fetch("http://localhost:3000/fighters")
        .then((response) => {
            console.log(response)
            let data 
            if (response.ok) {

                data = response.json()
                console.log(data)
            }
            return data;
        }) 
        .then((fighters) => {
       
            console.log(fighters, "fighters here")
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