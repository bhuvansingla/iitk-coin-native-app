import { showMessage } from "react-native-flash-message";

import { saveAccessToken, saveRefreshToken } from "secure-store";
import { auth } from "api";

export const login = async (params: auth.LoginParams): Promise<boolean> => {
	const response = await auth.postLogin(params);
	if (response.Status === 200) {
		return saveToken(response.Token);
	} else {
		showMessage({
			message: response.Payload,
			type: "danger",
		});
		return false;
	}
};

export const saveToken = (tokens: string): boolean => {
	const tokenArr = tokens.split(";");
	if (tokenArr.length > 0) {
		saveAccessToken(tokenArr[0]);
		saveRefreshToken(tokenArr[3]);
		return true;
	} else {
		return false;
	}
};
