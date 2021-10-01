import { saveToken } from "../secure-store/login/LoginToken";
import { LoginParams, postLogin } from "../api/Auth";

export const loginCallback = async (params : LoginParams) : Promise<boolean> => {
	const response = await postLogin(params);

	if (response.Status === 200) {
		const tokenArr = response.Token.split(";");
		if (tokenArr.length > 0) {
			saveToken(tokenArr[0]); // Save new token
		}
		return true;
	} else {
		return false;
	}
};
