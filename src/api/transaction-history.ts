import axios from "axios";

import { API } from "constant";

export enum TransactionType {
  REWARD = "REWARD",
  REDEEM = "REDEEM",
  TRANSFER = "TRANSFER",
}

export interface RewardHistory {
  Type: TransactionType.REWARD;
  TimeStamp: number;
  TxnID: string;
  Amount: number;
  Remarks: string;
}

export interface TransferHistory {
  Type: TransactionType.TRANSFER;
  TimeStamp: number;
  TxnID: string;
  Amount: number;
  Tax: number;
  FromRollNo: string;
  ToRollNo: string;
  Remarks: string;
}

export enum RedeemStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  CANCELLED = "CANCELLED",
  REJECTED = "REJECTED",
}

export interface RedeemHistory {
  Type: TransactionType.REDEEM;
  TimeStamp: number;
  TxnID: string;
  Amount: number;
  Remarks: string;
  Status: RedeemStatus;
}

export type TransactionHistory = RewardHistory | RedeemHistory | TransferHistory;

export interface TransactionHistoryParams {
	RollNo: string
}

export interface TransactionHistoryResponse {
	Payload: TransactionHistory[];
	Status: number;
}

const getTransactionHistory = async (params: TransactionHistoryParams, token: string): Promise<TransactionHistoryResponse> => {
	let payload: TransactionHistory[] = []; 
	let status = -1;
	await axios.get(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.TRANSFER_HISTORY, {
		headers: {
			cookie: token
		},
		params: {
			rollno: params.RollNo
		}
	}).then((res) => {
		payload = <TransactionHistory[]>res.data.history;
		status = res.status;
	}).catch(err => {
		payload = err?.response?.data.error ?? <TransactionHistory[]>[];
		status = err?.response?.status ?? API.BACKEND.ERROR.NETWORK.STATUS;
	});
	const response = {
		Payload: payload,
		Status: status
	};
	return response;
};

export { getTransactionHistory };
