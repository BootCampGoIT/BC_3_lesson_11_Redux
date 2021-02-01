import { combineReducers } from "redux";
import bootCampReducer from "./bootCampReducer";
import { studentsReducer } from "./studentsReducer";

const rootReducer = combineReducers({
  bootCamps: bootCampReducer,
  students: studentsReducer,
});

export default rootReducer;