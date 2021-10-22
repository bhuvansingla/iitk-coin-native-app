import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";

import { AppState } from "redux-store/reducers";
import { setCoins, setCurrentScreen, setName, setRollNo } from "redux-store/actions";
import { History, Text } from "components";
import { ScreenType } from "screens/screen.types";
import { NavCard, WalletBalance } from "components/Card";
import { TransactionType, TransactionHistory, RedeemStatus } from "api/transaction-history";
import LABELS from "constant/labels";
import { getUsername } from "api/user";
import { getRollNo, getToken } from "secure-store";
import { getWalletBalance } from "api/wallet";

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

	const username: string = useSelector((state: AppState) => state.user.name);
	const rollno: string = useSelector((state: AppState) => state.user.rollNo);
	const coins: number = useSelector((state: AppState) => state.user.coins);
	
	if(!rollno) {
		getRollNo().then(rollno => {
			if(rollno) {
				dispatch(setRollNo(rollno));
			}
		});
	}
	if(!username && rollno) {
		getToken().then(token => {
			if(token) {
				getUsername(parseInt(rollno), token).then(name => {
					dispatch(setName(name));
				});
				getWalletBalance(parseInt(rollno), token).then(balance => {
					dispatch(setCoins(balance));
				});
			}
		});
	}
	
	// TODO: transaction history redux state and api
	const [transaction, setTransaction] = useState<TransactionHistory[]>([]);
	
	useEffect(() => {
		// TODO: fetch transaction history
		const transactionHistory: TransactionHistory[] = [{
			Amount: 100, TimeStamp: 100, Type: TransactionType.REWARD, Remarks: "",
			TxnID: "3"
		}, 
		{
			Amount: 100, TimeStamp: 100, Type: TransactionType.TRANSFER, FromRollNo: "F", ToRollNo: "", Remarks: "", Tax: 10,
			TxnID: "1"
		}, 
		{
			Amount: 100, TimeStamp: 100, Type: TransactionType.REDEEM, Remarks: "", Status: RedeemStatus.APPROVED,
			TxnID: "2"
		}, 
		{
			Amount: 100, TimeStamp: 100, Type: TransactionType.TRANSFER, FromRollNo: "", ToRollNo: "F", Remarks: "", Tax: 10,
			TxnID: "4"
		}];
		setTransaction(transactionHistory);
	}, []);
	
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
