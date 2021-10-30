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
	Error: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseHistoryList = (historyList: any[]): TransactionHistory[]  => {
	if (historyList == null) return [];
	const parsedHistoryList: TransactionHistory[] = [];
	historyList.forEach(historyItem => {
		let parsedHistoryItem: TransactionHistory;
		switch (historyItem.type) {
		case TransactionType.REWARD:
			parsedHistoryItem = {
				Type: TransactionType.REWARD,
				TimeStamp: historyItem.timeStamp,
				TxnID: historyItem.txnID,
				Amount: historyItem.amount,
				Remarks: historyItem.remarks,
			};
			break;
		case TransactionType.REDEEM:
			parsedHistoryItem = {
				Type: TransactionType.REDEEM,
				TimeStamp: historyItem.timeStamp,
				TxnID: historyItem.txnID,
				Amount: historyItem.amount,
				Remarks: historyItem.remarks,
				Status: historyItem.status,
			};
			break;
		case TransactionType.TRANSFER:
			parsedHistoryItem = {
				Type: TransactionType.TRANSFER,
				TimeStamp: historyItem.timeStamp,
				TxnID: historyItem.txnID,
				Amount: historyItem.amount,
				Tax: historyItem.tax,
				FromRollNo: historyItem.fromRollNo,
				ToRollNo: historyItem.toRollNo,
				Remarks: historyItem.remarks,
			};
			break;
		default:
			return [];   
		}   
		parsedHistoryList.push(parsedHistoryItem);
	});
	return parsedHistoryList;
};

const getTransactionHistory = async (params: TransactionHistoryParams, token: string): Promise<TransactionHistoryResponse> => {
	let payload: TransactionHistory[] = []; 
	let status = 0;
	let error = "";
	await axios.get(API.BACKEND.BASE_URL + API.BACKEND.ENDPOINT.TRANSFER_HISTORY, {
		headers: {
			cookie: token
		},
		params: {
			rollNo: params.RollNo
		}
	}).then((res) => {
		payload = parseHistoryList(res.data.history);
		status = res.status;
	}).catch(err => {
		payload = [];
		error = err?.response?.data.error ?? API.BACKEND.ERROR.NETWORK.PAYLOAD;
		status = err?.response?.status ?? API.BACKEND.ERROR.NETWORK.STATUS;
	});
	const response = {
		Payload: payload,
		Status: status,
		Error: error
	};
	return response;
};

export { getTransactionHistory };
