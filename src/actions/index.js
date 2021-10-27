import fighterData from "../api/fighterData";

export const fetchFighters = () =>  async dispatch => {
    const response = await fighterData.get('/fighters');

    dispatch({ type: 'FETCH_POSTS', payload: response })
};