import React from "react";
import { View } from "react-native";

import { TextInput } from "components/TextInput";
import Button from "components/Button";
import { LABELS } from "constant";
import { validator } from "utils";

interface Props {
	setPassword: (password: string) => void;
	setRollNo: (rollNo: string) => void;
	isClicked?:boolean;
	onPressSignin: () => void;
	errors?: typeof validator.forms.login.emptyError;
}

const LoginForm: React.FC<Props> = (props) => {
	
	const { setPassword, setRollNo: setRollNo, onPressSignin, errors, isClicked } = props;

	const onChangePassword = (password: string) => {
		setPassword(password);
	};

	const onChangeRollNo = (rollNo: string) => {
		setRollNo(rollNo);
	};

	const label = isClicked ? LABELS.SIGNIN_BUTTON_TEXT_CLICKED : LABELS.SIGNIN_BUTTON_TEXT;

	return (

		<View>

			<TextInput numeric
				placeholder={LABELS.ROLL_NO_PLACEHOLDER}
				title={LABELS.ROLL_NO_INPUT_FIELD_TITLE}
				onChangeText={onChangeRollNo}
				error={errors?.rollNo}
			/>

			<TextInput password
				placeholder={LABELS.PASSWORD_PLACEHOLDER}
				title={LABELS.PASSWORD_INPUT_FIELD_TITLE}
				onChangeText={onChangePassword}
				error={errors?.password}
			/>

			<Button title={label} onPress={onPressSignin} disabled={isClicked}/>

		</View>

	);
};

export default LoginForm;
