export enum ActionType {
	USER_IS_AUTHENTICATED = "USER_IS_AUTHENTICATED",
	UPDATE_NAME = "UPDATE_NAME",
	UPDATE_ROLLNO = "UPDATE_ROLLNO",
}

export type Action =
	| { type: ActionType.USER_IS_AUTHENTICATED, payload: boolean }
	| { type: ActionType.UPDATE_NAME, payload: string }
	| { type: ActionType.UPDATE_ROLLNO, payload: string };
