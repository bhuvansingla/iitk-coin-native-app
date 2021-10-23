import { showMessage } from "react-native-flash-message";

import { wallet } from "api";
import { getToken } from "secure-store";

export const balanceCallback = async (rollno: string): Promise<number> => {
	const token = await getToken();
	if(token) {
		const res = await wallet.getWalletBalance(rollno, token);
		if(res.Status == 200){
			return parseInt(res.Payload);
		} else {
			showMessage({
				message: res.Payload,
				type: "danger",
			});
		}
	}
	return -1;
};
