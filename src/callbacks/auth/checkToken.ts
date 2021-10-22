import { Dispatch } from "redux";

import { postLoginStatus } from "api/auth";
import { deleteRollNo, deleteToken, getToken } from "secure-store";
import { setCurrentScreen, setIsAuthenticated } from "redux-store/actions";
import { ScreenType } from "screens/screen.types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CheckToken = async (dispatch: Dispatch<any>) : Promise<void> => {
	const token = await getToken();
	if (token) {
		await postLoginStatus(token).then((res) => {
			if (res.Status === 200) {
				dispatch(setIsAuthenticated(true));
				dispatch(setCurrentScreen(ScreenType.HOME));
			} else {
				deleteToken();
				deleteRollNo();
			}
		});
	}
};
