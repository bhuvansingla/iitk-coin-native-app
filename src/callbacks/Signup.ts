import { Signup, PostSignup } from "../api/Auth";

export const SignupCallback = async (input : Signup) : Promise<boolean> => {
	const response = await PostSignup(input);
	if (response.Status === 200) {
		return true;
	}else {
		console.error(response.Payload);
		return false;
	}
};
