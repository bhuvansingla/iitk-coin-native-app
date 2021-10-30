import { postLoginStatus } from "api/auth";
import { getToken } from "secure-store";

interface CheckStatus {
	RollNo: string;
	Status: boolean;
}

export const isLoggedIn = async (): Promise<CheckStatus> => {
	const token = await getToken();
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
