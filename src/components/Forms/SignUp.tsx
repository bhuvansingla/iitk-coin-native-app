import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "components";
import { LABELS, LENGTH } from "constant";
import { AppState } from "redux-store/reducers";

import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "redux-store/actions";

const SignUpForm: () => JSX.Element = () => {

	const dispatch = useDispatch();
	const isAuthenticated: boolean = useSelector((state: AppState) => state.auth.isAuthenticated);
	const [name, setName] = useState<string>("");
	const [rollNo, setRollNo] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const onChangeName = (name: string) => {
		if (name.length < LENGTH.NAME) {
			setName(name);
		}
	};

	const onChangeRollNo = (name: string) => {
		if (name.length < LENGTH.ROLL_NO) {
			setRollNo(name);
		}
	};

	const onChangePassword = (name: string) => {
		if (name.length < LENGTH.NAME) {
			setPassword(name);
		}
	};
	
	// Sign Up form
	const signUpForm = (

		<View>
			<TextInput
				placeholder={LABELS.ROLL_NO_PLACEHOLDER}
				title={LABELS.ROLL_NO_INPUT_FIELD_TITLE}
				onChangeText={onChangeRollNo}
				value={rollNo}
			/>

			<TextInput
				placeholder={LABELS.NAME_PLACEHOLDER}
				title={LABELS.NAME_INPUT_FIELD_TITLE}
				onChangeText={onChangeName}
				value={name}
			/>

			<TextInput
				placeholder={LABELS.PASSWORD_PLACEHOLDER}
				title={LABELS.PASSWORD_INPUT_FIELD_TITLE}
				onChangeText={onChangePassword}
				value={password}
			/>

			<Button title={isAuthenticated ? LABELS.SIGNOUT_BUTTON_TEXT : LABELS.SIGNUP_BUTTON_TEXT} onPress={() => { dispatch(setIsAuthenticated(!isAuthenticated)); }} />
		</View>
	);

	// render
	return (
		signUpForm 
	);
};

export default SignUpForm;