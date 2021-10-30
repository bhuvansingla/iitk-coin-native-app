import { showMessage } from "react-native-flash-message";

import { wallet } from "api";
import { getToken } from "secure-store";

export const redeemRequest = async (params: wallet.RedeemNewParams): Promise<string> => {
	const token = await getToken();
	if (token) {
		const res = await wallet.postNewRedeem(params, token);
		if (res.Status === 200) {
			return res.Payload;
		}else {
			showMessage({
				message: res.Payload,
				type: "danger",
			});
		}
	}
	return "";
};
