import { saveToken } from "secure-store";
import { auth } from "api";

export const loginCallback = async (params: auth.LoginParams): Promise<boolean> => {
	const response = await auth.postLogin(params);
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
