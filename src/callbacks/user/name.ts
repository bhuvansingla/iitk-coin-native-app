import { showMessage } from "react-native-flash-message";

import { user } from "api";
import { getAccessToken } from "secure-store";
import { API } from "constant";
import { refreshToken } from "callbacks/auth/refresh";

export const getName = async (rollNo: string): Promise<string> => {
	const token = await getAccessToken();
	if(token) {
		const res = await user.getUsername(rollNo, token);
		if(res.Status == 200){
			return res.Payload;
		} else if(res.Status == 401) {
			const ok = await refreshToken();
			if(ok) {
				return getName(rollNo);
			} else {
				showMessage({
					message: API.BACKEND.ERROR.EXPIRED.PAYLOAD,
					type: "danger",
				});
			}
		} else {
			showMessage({
				message: res.Payload,
				type: "danger",
			});
		}
	}
	return "";
};
