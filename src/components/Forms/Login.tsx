import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "components";
import { LABELS, LENGTH } from "constant";

const LoginForm: () => JSX.Element = () => {

	const [password, setPassword] = useState<string>("");
	const [rollNo, setRollNo] = useState<string>("");

	const onChangePassword = (name: string) => {
		if (name.length < LENGTH.NAME) {
			setPassword(name);
		}
	};

	const onChangeRollNo = (name: string) => {
		if (name.length < LENGTH.ROLL_NO) {
			setRollNo(name);
		}
		
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
				onChangeText={onChangePassword}
				value={password}
			/>
			<Button title= {LABELS.SIGNIN_BUTTON_TEXT} onPress={() => {console.log("Signing in");}}/>
		</View>
	);

	// render
	return (
		loginForm
	);
};

export default LoginForm;