export enum ActionType {
	USER_IS_AUTHENTICATED = "USER_IS_AUTHENTICATED"
}

export type Action =
	| { type: ActionType.USER_IS_AUTHENTICATED, payload: boolean };