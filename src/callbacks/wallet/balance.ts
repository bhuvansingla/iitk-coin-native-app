import { showMessage } from "react-native-flash-message";

import { wallet } from "api";
import { getAccessToken } from "secure-store";

export const getBalance = async (rollNo: string): Promise<number> => {
	const token = await getAccessToken();
	if(token) {
		const res = await wallet.getWalletBalance(rollNo, token);
		if(res.Status == 200){
			return parseInt(res.Payload);
		} else {
			showMessage({
				message: res.Payload,
				type: "danger",
			});
		}
	}
	return 0;
};
