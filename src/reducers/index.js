import { combineReducers } from "redux";
import fightersReducer from "./fightersReducer";


export default combineReducers({
    fighters: fightersReducer
});