import { combineReducers } from "redux";

import authReducer from "redux-store/reducers/auth";

const rootReducer = combineReducers({
	authReducer
});

export default rootReducer;
