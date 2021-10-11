enum TransactionType {
	REWARD = "REWARD",
	REDEEM = "REDEEM",
	TRANSFER = "TRANSFER"
}

interface RewardHistory {
	Type: TransactionType.REWARD,
	TimeStamp: number
	Amount: number
	Remarks: string
}

interface TransferHistory {
	Type: TransactionType.TRANSFER
	TimeStamp: number
	Amount: number
	Tax: number
	FromRollNo: number
	ToRollNo: number
	Remarks: string
}

enum RedeemStatus {
	PENDING = "PENDING",
	APPROVED = "APPROVED",
	CANCELLED = "CANCELLED",
	DISAPPROVED = "DISAPPROVED"
}

interface RedeemHistory {
	Type: TransactionType.REDEEM
	TimeStamp: number
	Amount: number
	Remarks: string
	Status: RedeemStatus
}

type TransactionHistory = RewardHistory | RedeemHistory | TransferHistory;

interface TransactionHistoryParams {
	RollNo: number
}

interface TransactionHistoryResponse {
	Payload: TransactionHistory[];
	Status: number;
}

// example -- delete later.
const rewardHistoryEntry: RewardHistory = { Amount: 100, TimeStamp: 100, Type: TransactionType.REWARD, Remarks: "" };
const redeemHistoryEntry: RedeemHistory = { Amount: 100, TimeStamp: 100, Type: TransactionType.REDEEM, Remarks: "", Status: RedeemStatus.APPROVED };
const transferHistoryEntry: TransferHistory = { Amount: 100, TimeStamp: 100, Type: TransactionType.TRANSFER, FromRollNo: 180199, ToRollNo: 180199, Remarks: "", Tax: 10 };
const transactionHistory: TransactionHistory[] = [rewardHistoryEntry, transferHistoryEntry, redeemHistoryEntry];
transactionHistory.forEach(transaction => (console.log(transaction.Type, transaction.TimeStamp)));
