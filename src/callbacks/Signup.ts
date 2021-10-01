import { SignupParams, postSignup } from "../api/Auth";

export const signupCallback = async (params : SignupParams) : Promise<boolean> => {
	const response = await postSignup(params);
	if (response.Status === 200) {
		return true;
	} else {
		return false;
	}
};
