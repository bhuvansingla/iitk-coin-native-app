import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";

import { setCurrentScreen, setIsAuthenticated, setRollNo } from "redux-store/actions";
import { Text } from "components";
import LoginForm from "components/Forms/Login";
import { LABELS } from "constant";
import { ScreenType } from "screens/screen.types";
import { LoginParams } from "api/auth";
import { login } from "callbacks";
import { validator } from "utils";

import styles from "../screen.styles";

const LoginScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	const [clicked, setClicked] = useState(false);
	const [password, setPassword] = useState<string>("");
	const [rollNumber, setRollNumber] = useState<string>("");
	const [loginFormError, setLoginFormError] = useState(validator.forms.login.emptyError);

	const onPressFooter = () => {
		dispatch(setCurrentScreen(ScreenType.SIGNUP));
	};

	const onPressSignin = () => {
		setClicked(true);
		const currentError = validator.forms.login.validate(rollNumber, password);
		setLoginFormError(currentError);
		if (validator.forms.login.isError(currentError)) {
			setClicked(false);
			return;
		}

		const loginParams: LoginParams = { RollNo: rollNumber, Password: password };
		login(loginParams).then((success) => {
			setClicked(false);
			if (success) {
				dispatch(setIsAuthenticated(true));
				dispatch(setRollNo(loginParams.RollNo));
				dispatch(setCurrentScreen(ScreenType.HOME));
			}
		}).catch(() => {
			setClicked(false);
		});
	};

	return (
		<View style={styles.contentContainer}>

			<Text.Heading title={LABELS.SIGNIN_FORM_TITLE} />

			<View style={styles.containerChildWrapper}>

				<LoginForm onPressSignin={onPressSignin} setPassword={setPassword} setRollNo={setRollNumber} errors={loginFormError} isClicked={clicked}/>

				<Text.Footer title={LABELS.CREATE_WALLET_FOOTER} link={LABELS.CREATE_WALLET_LINK} onPress={() => onPressFooter()} />

			</View>
		</View>
	);
};

export default LoginScreen;
