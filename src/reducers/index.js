import { combineReducers } from "redux";
import fightersReducer from "./postsReducer";


export default combineReducers({
    fighters: fightersReducer
});