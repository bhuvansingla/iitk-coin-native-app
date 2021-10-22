import { Action, ActionType } from "redux-store/types";

interface State {
	name: string,
    rollNo: string,
	coins: number,
}

const initialState: State = {
	name: "",
	rollNo: "",
	coins: -1,
};

const userReducer = (state: State = initialState, action: Action): State => {
	switch (action.type) {
	case ActionType.UPDATE_NAME:
		return { ...state, name: action.payload };
	case ActionType.UPDATE_ROLLNO:
		return { ...state, rollNo: action.payload };
	case ActionType.UPDATE_COINS:
		return { ...state, coins: action.payload };
	default:
		return state;
	}
};

export default userReducer;
