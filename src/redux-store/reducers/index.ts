import { combineReducers } from "redux";

import authReducer from "redux-store/reducers/auth";

const rootReducer = combineReducers({
	auth: authReducer
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
