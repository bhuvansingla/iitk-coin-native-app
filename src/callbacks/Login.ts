import { SaveToken } from "../secure-store/login/LoginToken";
import { Login, PostLogin } from "../api/Auth";

export const LoginCallback = async (input : Login) : Promise<boolean> => {
	const response = await PostLogin(input);

	if (response.Status === 200) {
		const tokenArr = response.Token.split(";");
		SaveToken(tokenArr[0]); // Save new token
		return true;
	} else {
		throw new Error(response.Payload);
	}
};
