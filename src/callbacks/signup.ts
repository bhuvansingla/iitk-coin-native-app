import { auth } from "api";

export const signupCallback = async (params: auth.SignupParams): Promise<boolean> => {
	const response = await auth.postSignup(params);
	if (response.Status === 200) {
		return true;
	} else {
		return false;
	}
};
