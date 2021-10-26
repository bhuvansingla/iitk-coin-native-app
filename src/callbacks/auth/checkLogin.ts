import { postLoginStatus } from "api/auth";
import { getToken } from "secure-store";

interface checkStatus {
	RollNo: string;
	Status: boolean;
}

export const isLoggedIn = async (): Promise<checkStatus> => {
	const token = await getToken();
	let rollno = "";
	let status = false;
	if (token) {
		await postLoginStatus(token).then((res) => {
			if (res.Status === 200) {
				rollno = res.Payload.rollno;
				status = true;
			}
		});
	}
	return { RollNo: rollno, Status:status };
};
