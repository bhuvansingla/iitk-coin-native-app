import { OTP, PostOTP } from "../api/Auth";

export const OTPCallback = async (input: OTP) : Promise<boolean> => {
	const response = await PostOTP(input);
	if (response.Status == 200) {
		return true;
	}else {
		console.error(response.Payload);
		return false;
	}
};
