import { AppState } from "redux-store/state/";
import { Action, ActionType } from "redux-store/types";


const authReducer = (state: AppState, action: Action): AppState => {
	switch (action.type) {
	case ActionType.USER_IS_AUTHENTICATED:
		return { ...state, isAuthenticated: action.payload };
	default:
		return state;
	}
};

export default authReducer;
