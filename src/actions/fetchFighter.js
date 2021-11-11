const GET_FIGHTER = "fighter/GET_FIGHTER"
const fetchFighter = (fighter) => {
    return {
        type: GET_FIGHTER,
        payload: fighter
    }
}

export default fetchFighter;