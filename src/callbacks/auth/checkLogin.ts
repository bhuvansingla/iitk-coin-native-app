import { postLoginStatus } from "api/auth";
import { getAccessToken } from "secure-store";

import { refreshToken } from "./refresh";

interface CheckStatus {
	RollNo: string;
	Status: boolean;
}

export const isLoggedIn = async (): Promise<CheckStatus> => {
	await refreshToken();
	const token = await getAccessToken();
	let rollNo = "";
	let status = false;
	if (token) {
		await postLoginStatus(token).then((res) => {
			if (res.Status === 200) {
				rollNo = res.Payload.rollNo;
				status = true;
			}
		});
	}
	return { RollNo: rollNo, Status:status };
};
