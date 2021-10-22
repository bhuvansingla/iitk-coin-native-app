import { showMessage } from "react-native-flash-message";

import { auth } from "api";

export const signupCallback = async (params: auth.SignupParams): Promise<boolean> => {
	const response = await auth.postSignup(params);
	if (response.Status === 200) {
		return true;
	} else {
		showMessage({
			message: response.Payload,
			type: "danger",
		});
		return false;
	}
};
