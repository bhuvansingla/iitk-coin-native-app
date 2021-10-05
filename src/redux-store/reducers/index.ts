import { combineReducers } from "redux";

import authReducer from "redux-store/reducers/auth";
import userReducer from "redux-store/reducers/user";

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
