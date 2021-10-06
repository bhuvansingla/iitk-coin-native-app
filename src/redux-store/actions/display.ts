import { Action, ActionType } from "redux-store/types";
import { ScreenType } from "screens/screen.types";

const setCurrentScreen = (payload: ScreenType): Action => ({
	type: ActionType.SET_CURRENT_SCREEN,
	payload,
});

export {
	setCurrentScreen
};
