import { Action, ActionType } from "redux-store/types";
import { ScreenType } from "screens/screen.types";


interface State {
	currentScreen: ScreenType
}

const initialState: State = {
	currentScreen: ScreenType.LOGIN
};

const displayReducer = (state: State = initialState, action: Action): State => {
	switch (action.type) {
	case ActionType.SET_CURRENT_SCREEN:
		return { ...state, currentScreen: action.payload };
	default:
		return state;
	}
};

export default displayReducer;
