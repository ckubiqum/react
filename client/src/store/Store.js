
import { combineReducers } from "redux";
import cityReducer from "./reducers/cityReducer";
import itineraryReducer from "./reducers/itineraryReducer";
const rootReducer = combineReducers({ cities: cityReducer } { itineraries: itineraryReducer });
export default rootReducer;