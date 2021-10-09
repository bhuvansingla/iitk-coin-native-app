import React from "react";
import { View } from "react-native";
import { TextInput, Button } from "components";
import { LABELS, LENGTH } from "constant";


interface Props {
	setPassword: (password: string) => void;
	setRollno: (rollno: string) => void;
	onPressSignin: () => void;
}

const LoginForm: React.FC<Props> = (props) => {

	const { setPassword, setRollno: setRollno, onPressSignin } = props;

	const onChangePassword = (password: string) => {
		if (password.length < LENGTH.NAME) {
			setPassword(password);
		}
	};

	const onChangeRollno = (rollno: string) => {
		if (rollno.length < LENGTH.ROLL_NO) {
			setRollno(rollno);
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
				placeholder={LABELS.PASSWORD_PLACEHOLDER}
				title={LABELS.PASSWORD_INPUT_FIELD_TITLE}
				password={true}
				onChangeText={onChangePassword}
			/>

			<Button title={LABELS.SIGNIN_BUTTON_TEXT} onPress={() => onPressSignin()} />

		</View>

	);
};

export default LoginForm;
