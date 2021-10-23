import { showMessage } from "react-native-flash-message";

import { getUsername } from "api/user";
import { getToken } from "secure-store";

export const nameCallback = async (rollno: string): Promise<string> => {
	const token = await getToken();
	if(token) {
		const res = await getUsername(rollno, token);
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
