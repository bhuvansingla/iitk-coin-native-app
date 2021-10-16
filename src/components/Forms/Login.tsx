import React from "react";
import { View } from "react-native";

import { TextInput } from "components/TextInput";
import Button from "components/Button";
import { LABELS } from "constant";
import { validator } from "utils";

interface Props {
	setPassword: (password: string) => void;
	setRollNo: (rollNo: string) => void;
	onPressSignin: () => void;
	errors?: typeof validator.forms.login.emptyError;
}

const LoginForm: React.FC<Props> = (props) => {

	const { setPassword, setRollNo: setRollNo, onPressSignin, errors } = props;

	const onChangePassword = (password: string) => {
		setPassword(password);
	};

	const onChangeRollNo = (rollNo: string) => {
		setRollNo(rollNo);
	};

	return (

		<View>

			<TextInput numeric
				placeholder={LABELS.ROLL_NO_PLACEHOLDER}
				title={LABELS.ROLL_NO_INPUT_FIELD_TITLE}
				onChangeText={onChangeRollNo}
				error={errors?.rollNo}
			/>

			<TextInput
				placeholder={LABELS.PASSWORD_PLACEHOLDER}
				title={LABELS.PASSWORD_INPUT_FIELD_TITLE}
				password={true}
				onChangeText={onChangePassword}
				error={errors?.password}
			/>

			<Button title={LABELS.SIGNIN_BUTTON_TEXT} onPress={onPressSignin} />

		</View>

	);
};

export default LoginForm;
