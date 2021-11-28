import { showMessage } from "react-native-flash-message";

import { wallet } from "api";
import { getAccessToken } from "secure-store";
import { refreshToken } from "callbacks/auth/refresh";
import { API } from "constant";

export const redeemRequest = async (params: wallet.RedeemNewParams): Promise<string> => {
	const token = await getAccessToken();
	if (token) {
		const res = await wallet.postNewRedeem(params, token);
		if (res.Status === 200) {
			return res.Payload;
		} else if(res.Status == 401) {
			const ok = await refreshToken();
			if(ok) {
				return redeemRequest(params);
			} else {
				showMessage({
					message: API.BACKEND.ERROR.EXPIRED.PAYLOAD,
					type: "danger",
				});
			}
		}else {
			showMessage({
				message: res.Payload,
				type: "danger",
			});
		}
	}
	return "";
};
