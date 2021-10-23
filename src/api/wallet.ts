import axios from "axios";

import { API } from "constant";

interface WalletTransferParams {
	NumCoins: number;
	ReceiverRollno: string;
	Remarks: string;
	OTP: string;
}

interface RedeemNewParams {
	NumCoins: number;
	ReceiverRollno: string;
	Item: string;
	OTP: string;
}

interface Response {
	Payload: string;
	Status: number;
}

const getWalletBalance = async (rollno: string, token: string): Promise<Response> => {
	let payload = "", status = 0;
	await axios.get(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.WALLET_BALANCE, {
		headers: {
			cookie: token
		},
		params: {
			rollno: rollno
		}
	}).then((res) => {
		payload = res.data.coins;
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

const postWalletTransfer = async (params: WalletTransferParams, token: string): Promise<Response> => {
	let payload = "", status = -1;
	await axios.post(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.WALLET_TRANSFER, {
		numCoins: params.NumCoins,
		receiverRollno: params.ReceiverRollno,
		remarks: params.Remarks,
		otp: params.OTP
	}, {
		headers: {
			cookie: token
		}
	}).then((res) => {
		payload = res.data.TxnID;
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

const postNewRedeem = async (params: RedeemNewParams, token: string): Promise<Response> => {
	let payload = "", status = -1;
	await axios.post(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.REDEEM_NEW, {
		numCoins: params.NumCoins,
		receiverRollno: params.ReceiverRollno,
		item: params.Item,
		otp: params.OTP
	}, {
		headers: {
			cookie: token
		}
	}).then((res) => {
		payload = res.data.TxnID;
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

export { WalletTransferParams, RedeemNewParams, getWalletBalance, postWalletTransfer, postNewRedeem };
