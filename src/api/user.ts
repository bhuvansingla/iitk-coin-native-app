import axios from "axios";
import { showMessage } from "react-native-flash-message";

import { API } from "constant";

const getUsername = async (rollno: number, token: string): Promise<string> => {
	let payload = "";
	await axios.get(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.USERNAME + API.BACKEND.QUERY_PARAM.ROLLNO + rollno, {
		headers: {
			"cookie": token
		}
	}).then((res) => {
		payload = res.data.name;
	}).catch(err => {
		showMessage({
			message: err?.response?.data.error ?? API.BACKEND.ERROR.NETWORK.PAYLOAD,
			type: "danger",
		});
		payload = "";
	});

	return payload;
};

export { getUsername };
