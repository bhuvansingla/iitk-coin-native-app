import { ScreenType } from "screens/screen.types";

export enum ActionType {
	USER_IS_AUTHENTICATED = "USER_IS_AUTHENTICATED",
	UPDATE_NAME = "UPDATE_NAME",
	UPDATE_ROLLNO = "UPDATE_ROLLNO",
	SET_CURRENT_SCREEN = "SET_CURRENT_SCREEN"
}

export type Action =
	| { type: ActionType.USER_IS_AUTHENTICATED, payload: boolean }
	| { type: ActionType.UPDATE_NAME, payload: string }
	| { type: ActionType.UPDATE_ROLLNO, payload: string }
	| { type: ActionType.SET_CURRENT_SCREEN, payload: ScreenType };
