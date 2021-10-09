import { Action, ActionType } from "redux-store/types";

interface State {
	name: string,
    rollNo: string
}

const initialState: State = {
	name: "",
	rollNo: ""
};

const userReducer = (state: State = initialState, action: Action): State => {
	switch (action.type) {
	case ActionType.UPDATE_NAME:
		return { ...state, name: action.payload };
	case ActionType.UPDATE_ROLLNO:
		return { ...state, rollNo: action.payload };
	default:
		return state;
	}
};

export default userReducer;
