import { Action, ActionType } from "redux-store/types";

const setIsAuthenticated = (payload: boolean): Action => ({
	type: ActionType.USER_IS_AUTHENTICATED,
	payload,
});

export {
	setIsAuthenticated
};
