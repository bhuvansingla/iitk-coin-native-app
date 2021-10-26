import { showMessage } from "react-native-flash-message";

import { saveToken } from "secure-store";
import { auth } from "api";

export const login = async (params: auth.LoginParams): Promise<boolean> => {
	const response = await auth.postLogin(params);
	if (response.Status === 200) {
		const tokenArr = response.Token.split(";");
		if (tokenArr.length > 0) {
			saveToken(tokenArr[0]); // Save new token
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
