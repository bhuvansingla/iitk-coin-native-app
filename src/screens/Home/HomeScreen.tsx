import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";

import { AppState } from "redux-store/reducers";
import { setCoins, setCurrentScreen, setName } from "redux-store/actions";
import { History, Text } from "components";
import { ScreenType } from "screens/screen.types";
import { NavCard, WalletBalance } from "components/Card";
import { history } from "api";
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

	const rollNo: string = useSelector((state: AppState) => state.user.rollNo);
	const username: string = useSelector((state: AppState) => state.user.name);
	const coins: number = useSelector((state: AppState) => state.user.coins); 

	const [isFetched, setIsFetched] = useState(false);
	const [transaction, setTransaction] = useState<history.TransactionHistory[]>([]);
	
	const getDetails = async (rollNo: string): Promise<[history.TransactionHistory[], number, string]> => {
		const historyList  = getHistory(rollNo);
		const balance = getBalance(rollNo);
		const name = getName(rollNo);

		return Promise.all([historyList, balance, name]);
	};

	useEffect(() => {
		getDetails(rollNo).then(([historyList, balance, name]) => {
			setTransaction(historyList);
			dispatch(setCoins(balance));
			dispatch(setName(name));
			setIsFetched(true);
		});
	}, [rollNo, dispatch]);
	
	return (
		<View style={styles.contentContainer}>

			<Text.Heading title={`${LABELS.GREET_MESSAGE} ${username} ${LABELS.GREET_EMOTE}`} isFetched={isFetched} />
			<WalletBalance coins={coins} isFetched={isFetched}/>
			<NavCard 
				accountAction={navigateToAccount} 
				sendAction={navigateToTransfer}
				redeemAction= {navigateToRedeem} 
			/>
			
			<View style={styles.titleLeft}>
				<Text.Title darkgrey bold>{LABELS.PAST_TRANSACTIONS}</Text.Title>
			</View>
			<History history={transaction} isFetched={isFetched} />
		</View>
	);
};

export default HomeScreen;
