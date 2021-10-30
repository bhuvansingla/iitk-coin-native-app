import axios from "axios";

import { API } from "constant";

interface WalletTransferParams {
	NumCoins: number;
	ReceiverRollNo: string;
	Remarks: string;
	OTP: string;
}

interface TransferTaxParams {
	NumCoins: number;
	ReceiverRollNo: string;
}

interface RedeemNewParams {
	NumCoins: number;
	ReceiverRollNo: string;
	Item: string;
	OTP: string;
}

interface Response {
	Payload: string;
	Status: number;
}

const getWalletBalance = async (rollNo: string, token: string): Promise<Response> => {
	let payload = "", status = 0;
	await axios.get(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.WALLET_BALANCE, {
		headers: {
			cookie: token
		},
		params: {
			rollNo: rollNo
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
	let payload = "", status = 0;
	await axios.post(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.WALLET_TRANSFER, {
		numCoins: params.NumCoins,
		receiverRollNo: params.ReceiverRollNo,
		remarks: params.Remarks,
		otp: params.OTP
	}, {
		headers: {
			cookie: token
		}
	}).then((res) => {
		payload = res.data.id;
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

const postTransferTax = async (params: TransferTaxParams, token: string): Promise<Response> => {
	let payload = "", status = 0;
	await axios.post(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.WALLET_TAX, {
		numCoins: params.NumCoins,
		receiverRollNo: params.ReceiverRollNo
	}, {
		headers: {
			cookie: token
		}
	}).then((res) => {
		payload = res.data.tax;
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
	let payload = "", status = 0;
	await axios.post(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.REDEEM_NEW, {
		numCoins: params.NumCoins,
		receiverRollNo: params.ReceiverRollNo,
		item: params.Item,
		otp: params.OTP
	}, {
		headers: {
			cookie: token
		}
	}).then((res) => {
		payload = res.data.id;
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

export { WalletTransferParams, RedeemNewParams, TransferTaxParams, getWalletBalance, postWalletTransfer, postNewRedeem, postTransferTax };
