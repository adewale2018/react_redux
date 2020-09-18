import { combineReducers } from "redux";

import fetchTasksReducer from "./reducers/fetchTasksReducer";

const rootReducer = combineReducers({
  tasks: fetchTasksReducer,
});

export default rootReducer;
