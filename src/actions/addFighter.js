// post fetch for adding a new fighter
 const addFighter = (fighter) => {
     console.log(fighter, "fighterHere")
    return(dispatch) => {
       // dispatch({ type: "ADD_FIGHTERS", fighter: fighter})
        fetch("http://localhost:3000/fighters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                image: fighter.image_url,
                name: fighter.name,
                style: fighter.style,
                wins: fighter.wins,
                losses: fighter.losses,

            })
        })
        .then(resp => resp.json())
        .then(fighter => {
            dispatch({ type: "ADD_FIGHTERS", fighter: fighter})
        })
    }
}




export default addFighter;