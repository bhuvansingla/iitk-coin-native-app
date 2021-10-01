/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const BASE_URL = "http://5ab4-223-190-106-94.ngrok.io";

// Interfaces
export interface OTP {
    Rollno: string;
}

export interface Signup {
    Rollno: string;
    Password: string;
    OTP: string;
}

export interface Login {
    Rollno: string;
    Password: string;
}

interface Response {
    Payload : any;
    Status : any;
    Token ?: any;
}

// API
export const PostOTP = async (otp: OTP) : Promise<Response> => {
	let payload, status;
	await axios.post(`${BASE_URL}/auth/otp`, {
		Rollno: otp.Rollno
	}).then(res => {
		payload = res.data;
		status = res.status;
	}).catch(err => {
		payload = err.response.data;
		status = err.response.status;
	});

	const response : Response = {
		Payload : payload,
		Status : status
	};
	return response;
};

export const Test = async () : Promise<unknown> => {
	return await (await axios.get(`${BASE_URL}/`)).data;
};

export const PostSignup = async (signup: Signup) : Promise<Response>=> {
	let payload, status;
	await axios.post(`${BASE_URL}/auth/signup`, {
		Rollno: signup.Rollno,
		Password: signup.Password,
		OTP: signup.OTP
	}).then(res => {
		payload = res.data;
		status = res.status;
	}).catch(err => {
		payload = err.response.data;
		status = err.response.status;
	});
	const response : Response = {
		Payload : payload,
		Status : status
	};
	return response;
};

export const PostLogin = async (login: Login) : Promise<Response> => {
	let payload, status;
	let token : any;
	await axios.post(`${BASE_URL}/auth/login`, {
		Rollno: login.Rollno,
		Password: login.Password
	}).then(res => {
		token = res.headers["set-cookie"][0];
		payload = res.data;
		status = res.status;
	}).catch(err => {
		payload = err.response.data;
		status = err.response.status;
	});
	const response : Response = {
		Payload : payload,
		Status : status,
		Token : token
	};
	return response;
};

export const Logout = async (token: string) : Promise<Response>=> {
	let payload, status;
	await axios.post(`${BASE_URL}/auth/logout`, {}, {
		headers: {
			"Cookie": token
		}
	}).then(res => {
		payload = res.data;
		status = res.status;
	}).catch(err => {
		payload = err.response.data;
		status = err.response.status;
	});
	const response : Response = {
		Payload : payload,
		Status : status
	};
	return response;
};
