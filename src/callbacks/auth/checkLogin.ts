import { postLoginStatus } from "api/auth";
import { getToken } from "secure-store";

export const isLoggedIn = async () : Promise<string> => {
	const token = await getToken();
	let rollno = "";
	if (token) {
		await postLoginStatus(token).then((res) => {
			if (res.Status === 200) {
				rollno = res.Payload.rollno;
			}
		});
	}
	return rollno;
};
