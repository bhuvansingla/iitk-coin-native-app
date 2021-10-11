import React from "react";
import { View } from "react-native";

import { history } from "api";
import HistoryListItem from "components/Card/HistoryListItem";

export interface Props {
	history: history.TransactionHistory[];
}

const noHistoryParams: history.RewardHistory = {
	Type: history.TransactionType.REWARD,
	Amount: 404,
	TxnID: "Let's Find Out!",
	TimeStamp: 1633104917,
	Remarks: "You Have No Transactions Yet",
};

export const HistoryList: React.FC<Props> = ({ history }: Props) => {
	return (
		<View>
			{
				history.map((transaction) =>
					<HistoryListItem key={transaction.TxnID} details={transaction} />
				)
			}
		</View>
	);
};

export const NoHistory: () => JSX.Element = () => {
	return <HistoryListItem key="noHistory" details={noHistoryParams} />;
};
