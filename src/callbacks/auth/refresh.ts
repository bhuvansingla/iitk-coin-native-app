import { getTokenRefreshed, Response } from "api/auth";
import { getAccessToken, getRefreshToken } from "secure-store";

import { saveToken } from "./login";

export const refreshToken = async (): Promise<boolean> => {
	const accessToken = await getAccessToken();
	const refreshToken = await getRefreshToken();
	let res: Response;

	if (accessToken && refreshToken) {
		res = await getTokenRefreshed(accessToken, refreshToken);
	} else {
		return false;
	}
   
	if (res.Status === 200) {
		return await saveToken(res.Token);
	}

	return false;
};
