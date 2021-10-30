import { showMessage } from "react-native-flash-message";

import { user } from "api";
import { getToken } from "secure-store";

export const getName = async (rollNo: string): Promise<string> => {
	const token = await getToken();
	if(token) {
		const res = await user.getUsername(rollNo, token);
		if(res.Status == 200){
			return res.Payload;
		} else {
			showMessage({
				message: res.Payload,
				type: "danger",
			});
		}
	}
	return "";
};
