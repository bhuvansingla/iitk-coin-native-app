import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";

import { AppState } from "redux-store/reducers";
import { setCoins, setCurrentScreen, setName } from "redux-store/actions";
import { History, Text } from "components";
import { ScreenType } from "screens/screen.types";
import { NavCard, WalletBalance } from "components/Card";
import { TransactionHistory } from "api/transaction-history";
import LABELS from "constant/labels";
import { getBalance, getHistory, getName } from "callbacks";

import styles from "../screen.styles";

const HomeScreen: () => JSX.Element = () => {
	const dispatch = useDispatch();

	const navigateToTransfer = () => {
		dispatch(setCurrentScreen(ScreenType.TRANSFER));
	};

	const navigateToAccount = () => {
		dispatch(setCurrentScreen(ScreenType.ACCOUNT));
	};

	const navigateToRedeem = () => {
		dispatch(setCurrentScreen(ScreenType.REDEEM));
	};

	const rollno: string = useSelector((state: AppState) => state.user.rollNo);
	const username: string = useSelector((state: AppState) => state.user.name);
	const coins: number = useSelector((state: AppState) => state.user.coins); 

	// TODO: transaction history redux state and api
	const [transaction, setTransaction] = useState<TransactionHistory[]>([]);
	
	useEffect(() => {
		getBalance(rollno).then((coins) => { dispatch(setCoins(coins)); });
		getName(rollno).then((name) => { dispatch(setName(name)); });
		getHistory(rollno).then((historyList) => { setTransaction(historyList); });

	}, [rollno, dispatch]);
	
	return (
		<View style={styles.contentContainer}>

			<Text.Heading title={`${LABELS.GREET_MESSAGE} ${username} ${LABELS.GREET_EMOTE}`} />
			<WalletBalance coins={coins} />
			<NavCard 
				accountAction={navigateToAccount} 
				sendAction={navigateToTransfer}
				redeemAction= {navigateToRedeem} />
			
			<View style={styles.titleLeft}>
				<Text.Title darkgrey bold>{LABELS.PAST_TRANSACTIONS}</Text.Title>
			</View>

			<History history={transaction} />
		</View>
	);
};

export default HomeScreen;
