import { showMessage } from "react-native-flash-message";

import { history } from "api";
import { getToken } from "secure-store";

export const getHistory = async (rollNo: string): Promise<history.TransactionHistory[]> => {
	const token = await getToken();
	if(token) {
		const res = await history.getTransactionHistory({ RollNo: rollNo }, token);
		if(res.Status == 200){
			return res.Payload;
		} else {
			showMessage({
				message: res.Error,
				type: "danger",
			});
		}
	}
	return [];
};
