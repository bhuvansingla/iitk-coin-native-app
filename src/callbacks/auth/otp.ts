import { showMessage } from "react-native-flash-message";

import { auth } from "api";

export const requestOtp = async (params: auth.OTPParams): Promise<boolean> => {
	const response = await auth.postOTP(params);
	if (response.Status == 200 || response.Status == 429) {
		return true;
	} else {
		showMessage({
			message: response.Payload,
			type: "danger",
		});
		return false;
	}
};
