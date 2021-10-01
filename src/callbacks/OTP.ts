import { OTPParams, postOTP } from "../api/Auth";

export const otpCallback = async (params: OTPParams) : Promise<boolean> => {
	const response = await postOTP(params);
	if (response.Status == 200) {
		return true;
	}else {
		return false;
	}
};
