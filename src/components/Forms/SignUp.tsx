import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "components";
import { LABELS, LENGTH } from "constant";

const SignUpForm: () => JSX.Element = () => {

	const [name, setName] = useState<string>("");
	const [rollNo, setRollNo] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const onChangeName = (name: string) => {
		if (name.length < LENGTH.NAME) {
			setName(name);
		}
	};

	const onChangeRollNo = (rollNo: string) => {
		if (rollNo.length < LENGTH.ROLL_NO) {
			setRollNo(rollNo);
		}
	};

	const onChangePassword = (password: string) => {
		if (password.length < LENGTH.PASSWORD) {
			setPassword(password);
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

			<Button title= {LABELS.SIGNUP_BUTTON_TEXT} onPress={() => {console.log(rollNo);}}/>

		</View>
	);

	// render
	return (
		signUpForm 
	);

};

export default SignUpForm;
