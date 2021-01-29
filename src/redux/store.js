import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bootCampReducer from "./reducers/bootCampReducer";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
