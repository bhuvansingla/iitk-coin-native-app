import { showMessage } from "react-native-flash-message";

import { saveAccessToken } from "secure-store";
import { auth } from "api";

export const login = async (params: auth.LoginParams): Promise<boolean> => {
	const response = await auth.postLogin(params);
	if (response.Status === 200) {
		const tokenArr = response.Token.split(";");
		if (tokenArr.length > 0) {
			saveAccessToken(tokenArr[0]);
		}
		return true;
	} else {
		showMessage({
			message: response.Payload,
			type: "danger",
		});
		return false;
	}
};
