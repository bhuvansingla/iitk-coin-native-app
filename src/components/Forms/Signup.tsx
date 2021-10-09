import React from "react";
import { View } from "react-native";
import { TextInput, Button } from "components";
import { LABELS, LENGTH } from "constant";

interface Props {
	setName: (name: string) => void;
	setPassword: (password: string) => void;
	setRollno: (rollno: string) => void;
	onPressSubmit: () => void;
}

const SignupForm: React.FC<Props> = (props) => {

	const { setName, setPassword, setRollno: setRollno, onPressSubmit } = props;

	const onChangeName = (name: string) => {
		if (name.length < LENGTH.NAME) {
			setName(name);
		}
	};

	const onChangeRollno = (rollno: string) => {
		if (rollno.length < LENGTH.ROLL_NO) {
			setRollno(rollno);
		}
	};

	const onChangePassword = (password: string) => {
		if (password.length < LENGTH.PASSWORD) {
			setPassword(password);
		}
	};

	return (

		<View>

			<TextInput
				placeholder={LABELS.ROLL_NO_PLACEHOLDER}
				title={LABELS.ROLL_NO_INPUT_FIELD_TITLE}
				onChangeText={onChangeRollno}
			/>

			<TextInput
				placeholder={LABELS.NAME_PLACEHOLDER}
				title={LABELS.NAME_INPUT_FIELD_TITLE}
				onChangeText={onChangeName}
			/>

			<TextInput
				placeholder={LABELS.PASSWORD_PLACEHOLDER}
				title={LABELS.PASSWORD_INPUT_FIELD_TITLE}
				onChangeText={onChangePassword}
			/>

			<Button title={LABELS.SIGNUP_BUTTON_TEXT} onPress={() => onPressSubmit()} />

		</View>
	);
};

export default SignupForm;
