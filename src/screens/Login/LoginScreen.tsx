import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";

import { setCurrentScreen, setIsAuthenticated } from "redux-store/actions";
import { Text } from "components";
import LoginForm from "components/Forms/Login";
import { LABELS } from "constant";
import { ScreenType } from "screens/screen.types";
import { LoginParams } from "api/auth";
import { loginCallback } from "callbacks/login";

import styles from "../screen.styles";

const LoginScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	const [password, setPassword] = useState<string>("");
	const [rollNo, setRollNo] = useState<string>("");

	const onPressFooter = () => {
		dispatch(setCurrentScreen(ScreenType.SIGNUP));
	};

	const onPressSignin = () => {
		const loginParams: LoginParams = { RollNo: rollNo, Password: password };
		loginCallback(loginParams).then((success) => {
			if (success) {
				dispatch(setIsAuthenticated(true));
				dispatch(setCurrentScreen(ScreenType.HOME));
			}
		});
	};

	return (
		<View style={styles.contentContainer}>

			<Text.Heading title={LABELS.SIGNIN_FORM_TITLE} />

			<View style={styles.formContainer}>

				<LoginForm onPressSignin={onPressSignin} setPassword={setPassword} setRollNo={setRollNo} />

				<Text.Footer title={LABELS.CREATE_WALLET_FOOTER} link={LABELS.CREATE_WALLET_LINK} onPress={() => onPressFooter()} />

			</View>
		</View>
	);
};

export default LoginScreen;
