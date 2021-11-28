import { showMessage } from "react-native-flash-message";

import { wallet } from "api";
import { getAccessToken } from "secure-store";

export const transfer = async (params: wallet.WalletTransferParams): Promise<string> => {
	const token = await getAccessToken();
	if (token) {
		const res = await wallet.postWalletTransfer(params, token);
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
