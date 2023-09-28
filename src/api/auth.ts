/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import { API } from "constant";

// Interfaces
interface OTPParams {
	RollNo: string;
}

interface SignupParams {
	Name: string;
	RollNo: string;
	Password: string;
	OTP: string;
}

interface LoginParams {
	RollNo: string;
	Password: string;
}

interface Response {
	Payload: any;
	Status: any;
	Token?: any;
}

// API
const postOTP = async (params: OTPParams): Promise<Response> => {
	let payload, status;
	await axios.post(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.OTP, {
		RollNo: params.RollNo,
	}).then(res => {
		payload = res.data;
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

const postSignup = async (params: SignupParams): Promise<Response> => {
	let payload, status;
	await axios.post(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.SIGNUP, {
		Name: params.Name,
		RollNo: params.RollNo,
		Password: params.Password,
		OTP: params.OTP
	}).then(res => {
		payload = res.data;
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

const postLogin = async (params: LoginParams): Promise<Response> => {
	let payload, status;
	let token: any;
	await axios.post(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.LOGIN, {
		RollNo: params.RollNo,
		Password: params.Password
	}).then(res => {
		token = res.headers["set-cookie"][0];
		payload = res.data;
		status = res.status;
	}).catch(err => {
		payload = err?.response?.data.error ?? API.BACKEND.ERROR.NETWORK.PAYLOAD;
		status = err?.response?.status ?? API.BACKEND.ERROR.NETWORK.STATUS;
	});
	const response: Response = {
		Payload: payload,
		Status: status,
		Token: token
	};
	return response;
};

const postLogout = async (token: string): Promise<Response> => {
	let payload, status;
	await axios.post(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.LOGOUT, {}, {
		headers: {
			"cookie": token
		}
	}).then(res => {
		payload = res.data;
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

const postLoginStatus = async (token: string): Promise<Response> => {
	let payload, status;
	await axios.post(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.CHECK_LOGIN, {}, {
		headers: {
			"cookie": token
		}
	}).then(res => {
		payload = res.data;
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

const getTokenRefreshed = async (accessToken: string, refreshToken: string): Promise<Response> => {
	let payload, status, token;
	await axios.get(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.REFRESH_TOKEN, {
		headers: {
			"cookie": accessToken + ";" + refreshToken
		}
	}).then(res => {
		token = res.headers["set-cookie"][0];
		payload = res.data;
		status = res.status;
	}).catch(err => {
		payload = err?.response?.data.error ?? API.BACKEND.ERROR.NETWORK.PAYLOAD;
		status = err?.response?.status ?? API.BACKEND.ERROR.NETWORK.STATUS;
	});
	const response: Response = {
		Payload: payload,
		Status: status,
		Token: token
	};
	return response;
};

export {
	OTPParams,
	SignupParams,
	LoginParams,
	Response,
	postOTP,
	postSignup,
	postLogin,
	postLogout,
	postLoginStatus,
	getTokenRefreshed
};
