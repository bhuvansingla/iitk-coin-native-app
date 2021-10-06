import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "components";
import { LABELS, LENGTH } from "constant";
import { LoginParams } from "api/auth";
import { loginCallback } from "callbacks/login";
import { useDispatch } from "react-redux";
import { setCurrentScreen, setIsAuthenticated } from "redux-store/actions";
import { ScreenType } from "screens/screen.types";
const LoginForm: () => JSX.Element = () => {

	const [password, setPassword] = useState<string>("");
	const [rollNo, setRollNo] = useState<string>("");

	const dispatch = useDispatch();

	const onChangePassword = (password: string) => {
		if (password.length < LENGTH.NAME) {
			setPassword(password);
		}
	};

	const onChangeRollNo = (rollNo: string) => {
		if (rollNo.length < LENGTH.ROLL_NO) {
			setRollNo(rollNo);
		}

	};

	const onPressSignin = () => {
		const loginParams: LoginParams = { Rollno: rollNo, Password: password };
		loginCallback(loginParams).then((success) => {
			if (success) {
				dispatch(setIsAuthenticated(true));
				dispatch(setCurrentScreen(ScreenType.HOME));
			}
		});
	};

	// Login form
	const loginForm = (

		<View>

			<TextInput
				placeholder={LABELS.ROLL_NO_PLACEHOLDER}
				title={LABELS.ROLL_NO_INPUT_FIELD_TITLE}
				onChangeText={onChangeRollNo}
				value={rollNo}
			/>

			<TextInput
				placeholder={LABELS.PASSWORD_PLACEHOLDER}
				title={LABELS.PASSWORD_INPUT_FIELD_TITLE}
				password={true}
				onChangeText={onChangePassword}
				value={password}
			/>

			<Button title={LABELS.SIGNIN_BUTTON_TEXT} onPress={() => onPressSignin()} />

		</View>

	);

	// render
	return (
		loginForm
	);

};

export default LoginForm;
