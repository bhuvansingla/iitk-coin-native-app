import { showMessage } from "react-native-flash-message";

import { history } from "api";
import { getAccessToken } from "secure-store";
import { refreshToken } from "callbacks/auth/refresh";
import { API } from "constant";

export const getHistory = async (rollNo: string): Promise<history.TransactionHistory[]> => {
	const token = await getAccessToken();
	if(token) {
		const res = await history.getTransactionHistory({ RollNo: rollNo }, token);
		if(res.Status == 200){
			return res.Payload;
		} else if(res.Status == 401) {
			const ok = await refreshToken();
			if(ok) {
				return getHistory(rollNo);
			} else {
				showMessage({
					message: API.BACKEND.ERROR.EXPIRED.PAYLOAD,
					type: "danger",
				});
			}
		}
		else {
			showMessage({
				message: res.Error,
				type: "danger",
			});
		}
	}
	return [];
};
