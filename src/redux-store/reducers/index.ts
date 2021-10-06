import { combineReducers } from "redux";

import authReducer from "redux-store/reducers/auth";
import userReducer from "redux-store/reducers/user";
import displayReducer from "redux-store/reducers/display";

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	display: displayReducer
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
