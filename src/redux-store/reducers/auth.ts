import { Action, ActionType } from "redux-store/types";

interface State {
	isAuthenticated: boolean
}

const initialState: State = {
	isAuthenticated: false
};

const authReducer = (state: State = initialState, action: Action): State => {
	switch (action.type) {
	case ActionType.USER_IS_AUTHENTICATED:
		return { ...state, isAuthenticated: action.payload };
	default:
		return state;
	}
};

export default authReducer;
