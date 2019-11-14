import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    cities: cityReducer,
    itineraries: itineraryReducer,
    activities: activityReducer,
    users: userReducer,
});
export default rootReducer;