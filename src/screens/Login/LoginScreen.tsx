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
import { validator } from "utils";

import styles from "../screen.styles";

const LoginScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	const [clicked, setClicked] = useState(false);
	const [password, setPassword] = useState<string>("");
	const [rollNo, setRollNo] = useState<string>("");
	const [loginFormError, setLoginFormError] = useState(validator.forms.login.emptyError);

	const onPressFooter = () => {
		dispatch(setCurrentScreen(ScreenType.SIGNUP));
	};

	const onPressSignin = () => {
		setClicked(true);
		const currentError = validator.forms.login.validate(rollNo, password);
		setLoginFormError(currentError);
		if (validator.forms.login.isError(currentError)) {
			setClicked(false);
			return;
		}

		const loginParams: LoginParams = { RollNo: rollNo, Password: password };
		loginCallback(loginParams).then((success) => {
			if (success) {
				dispatch(setIsAuthenticated(true));
				dispatch(setCurrentScreen(ScreenType.HOME));				
			}
			setClicked(false);
		});
	};

	return (
		<View style={styles.contentContainer}>

			<Text.Heading title={LABELS.SIGNIN_FORM_TITLE} />

			<View style={styles.containerChildWrapper}>

				<LoginForm onPressSignin={onPressSignin} setPassword={setPassword} setRollNo={setRollNo} errors={loginFormError} isClicked={clicked}/>

				<Text.Footer title={LABELS.CREATE_WALLET_FOOTER} link={LABELS.CREATE_WALLET_LINK} onPress={() => onPressFooter()} />

			</View>
		</View>
	);
};

export default LoginScreen;
