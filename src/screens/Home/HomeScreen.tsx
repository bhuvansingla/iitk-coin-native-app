import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

import { AppState } from "redux-store/reducers";
import { setCoins, setCurrentScreen, setIsAuthenticated, setName } from "redux-store/actions";
import { History, Text } from "components";
import { ScreenType } from "screens/screen.types";
import { NavCard, WalletBalance } from "components/Card";
import { history } from "api";
import LABELS from "constant/labels";
import { getBalance, getHistory, getName } from "callbacks";
import { refreshToken } from "callbacks/auth/refresh";

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
		const balance = await getBalance(rollNo);	// to prevent async refresh tokens
		const historyList = getHistory(rollNo);
		const name = getName(rollNo);

		return Promise.all([historyList, balance, name]);
	};

	useEffect(() => {
		setIsFetched(false);
		getDetails(rollNo).then(([historyList, balance, name]) => {
			if(historyList === [] || balance === 0 || name === "") {
				refreshToken().then((ok) => {
					if (!ok) {
						dispatch(setIsAuthenticated(false));
						dispatch(setCurrentScreen(ScreenType.LOGIN));
						return;
					}
				});
			}
			setTransaction(historyList);
			dispatch(setCoins(balance));
			dispatch(setName(name));
			setIsFetched(true);
		});
	}, [rollNo, dispatch]);

	return (
		<Animatable.View duration={800} easing="ease-out-cubic" animation="slideInUp">
			<View style={styles.contentContainer}>
				<Text.Heading title={`${LABELS.GREET_MESSAGE} ${username.split(" ")[0]}${LABELS.GREET_EMOTE}`} isFetched={isFetched}/>

				<WalletBalance coins={coins} isFetched={isFetched}/>

				<NavCard
					accountAction={navigateToAccount}
					sendAction={navigateToTransfer}
					redeemAction={navigateToRedeem} />

				<View style={styles.titleLeft}>
					<Text.Title darkgrey bold>{LABELS.PAST_TRANSACTIONS}</Text.Title>
				</View>

				<History history={transaction} isFetched={isFetched}/>
			</View>
		</Animatable.View>
	);
};

export default HomeScreen;
