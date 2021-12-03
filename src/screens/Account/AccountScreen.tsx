import React, { useState, useEffect } from "react";
import { View, Linking } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";

import { AppState } from "redux-store/reducers";
import { Button, Text, WalletBalance, UserInfo } from "components";
import { ScreenType } from "screens/screen.types";
import { setCurrentScreen, setIsAuthenticated } from "redux-store/actions";
import { LABELS } from "constant";
import { deleteAccessToken, deleteRefreshToken, getRefreshToken } from "secure-store";
import { postLogout } from "api/auth";

import styles from "../screen.styles";

const AccountScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	const username: string = useSelector((state: AppState) => state.user.name);
	const rollNo: string = useSelector((state: AppState) => state.user.rollNo);
	const coins: number = useSelector((state: AppState) => state.user.coins);

	const [email, setEmail] = useState("");

	useEffect(() => {
		setEmail(`${rollNo}${LABELS.ACCOUNT_MAIL_DOMAIN}`);
	}, [rollNo]);

	const onClickReport = () => {
		// send email to admin
		Linking.openURL(LABELS.ACCOUNT_SEND_EMAIL_LINK);
	};

	const onLogout = () => {
		getRefreshToken().then(token => {
			if (token) {
				postLogout(token).then((res) => {
					if (res.Status == 200) {
						deleteAccessToken();
						deleteRefreshToken();
					}
				});
			}
		});
		dispatch(setIsAuthenticated(false));
		dispatch(setCurrentScreen(ScreenType.LOGIN));
	};

	const onPressBack = () => {
		dispatch(setCurrentScreen(ScreenType.HOME));
	};

	return (
		<Animatable.View duration={800} easing="ease-out-cubic" animation="slideInUp">
			<View style={styles.contentContainer}>

				<Text.PageTitle title={LABELS.ACCOUNT_TITLE} onPressBack={onPressBack} />

				<WalletBalance coins={coins} />

				<UserInfo name={username} email={email} rollNo={rollNo} />

				<Button red title={LABELS.ACCOUNT_LOGOUT} onPress={onLogout} />

				<Button yellow title={LABELS.ACCOUNT_REPORT_ERROR} onPress={onClickReport} />

			</View>
		</Animatable.View>
	);
};

export default AccountScreen;
