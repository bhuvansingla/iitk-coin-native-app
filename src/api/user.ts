import axios from "axios";

import { API } from "constant";

interface Response {
	Payload: string;
	Status: number;
}

const getUsername = async (rollno: string, token: string): Promise<Response> => {
	let payload = "", status = 0;
	await axios.get(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.USERNAME, {
		headers: {
			cookie: token
		},
		params: {
			rollno: rollno
		}
	}).then((res) => {
		payload = res.data.name;
		status = res.status;
	}).catch(err => {
		payload = err?.response?.data.error ?? API.BACKEND.ERROR.NETWORK.PAYLOAD;
		status = err?.response?.status ?? API.BACKEND.ERROR.NETWORK.STATUS;
	});

	const response: Response = {
		Payload: payload,
		Status: status
	};

	return response;
};

export { getUsername };
