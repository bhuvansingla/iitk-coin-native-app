import { auth } from "api";

export const otpCallback = async (params: auth.OTPParams) : Promise<boolean> => {
	const response = await auth.postOTP(params);
	if (response.Status == 200) {
		return true;
	}else {
		return false;
	}
};
