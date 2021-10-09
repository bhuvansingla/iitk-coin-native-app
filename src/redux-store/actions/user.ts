import { Action, ActionType } from "redux-store/types";

const setName = (payload: string): Action => ({
	type: ActionType.UPDATE_NAME,
	payload,
});

const setRollno = (payload: string): Action => ({
	type: ActionType.UPDATE_ROLLNO,
	payload,
});

export {
	setName,
	setRollno
};
