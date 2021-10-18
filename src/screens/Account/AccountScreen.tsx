import React, { useState, useEffect } from "react";
import { View, Linking } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "redux-store/reducers";
import { Button, Text, WalletBalance, UserInfo } from "components";
import { ScreenType } from "screens/screen.types";
import { setCurrentScreen, setIsAuthenticated } from "redux-store/actions";
import { LABELS } from "constant";

import styles from "../screen.styles";

const AccountScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	const username: string = useSelector((state: AppState) => state.user.name);
	const rollNo: string = useSelector((state: AppState) => state.user.rollNo);
	const coins: number = useSelector((state: AppState) => state.user.coins);

	const [email, setEmail] = useState("");
	
	useEffect(() => {
		// call API for email id
		setEmail("harshitr20@iitk.ac.in");
	}, []);

	const onClickReport = () => {
		// send email to admin
		Linking.openURL(LABELS.ACCOUNT_SEND_EMAIL_LINK);
	};

	const onLogout = () => {
		// TODO: call API for logout and clear secure store
		dispatch(setIsAuthenticated(false));
		dispatch(setCurrentScreen(ScreenType.LOGIN));
	};

	const onPressBack = () => {
		console.log("back");
		dispatch(setCurrentScreen(ScreenType.HOME));
	};

	return (
		<View style={styles.contentContainer}>

			<Text.PageTitle title={LABELS.ACCOUNT_TITLE} onPressBack={onPressBack} />

			<WalletBalance coins={coins} />

			<UserInfo name={username} email={email} rollNo={rollNo} />
			
			<Button red title={LABELS.ACCOUNT_LOGOUT} onPress={onLogout} />
			
			<Button yellow title={LABELS.ACCOUNT_REPORT_ERROR} onPress={onClickReport} />

		</View>
	);
};

export default AccountScreen;
