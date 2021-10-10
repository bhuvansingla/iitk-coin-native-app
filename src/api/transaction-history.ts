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
  DISAPPROVED = "DISAPPROVED",
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

interface TransactionHistoryParams {
	RollNo: number
}

interface TransactionHistoryResponse {
	Payload: TransactionHistory[];
	Status: number;
}
