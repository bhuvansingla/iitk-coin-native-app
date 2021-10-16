import React from "react";
import { View } from "react-native";

import { TextInput } from "components/TextInput";
import Button from "components/Button";
import { LABELS } from "constant";
import { validator } from "utils";

interface Props {
	setName: (name: string) => void;
	setPassword: (password: string) => void;
	setRollNo: (rollNo: string) => void;
	onPressSubmit: () => void;
	errors?: typeof validator.forms.signup.emptyError;
}

const SignupForm: React.FC<Props> = (props) => {

	const { setName, setPassword, setRollNo, onPressSubmit, errors } = props;

	const onChangeName = (name: string) => {
		setName(name);
	};

	const onChangeRollNo = (rollNo: string) => {
		setRollNo(rollNo);
	};

	const onChangePassword = (password: string) => {
		setPassword(password);
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
				placeholder={LABELS.NAME_PLACEHOLDER}
				title={LABELS.NAME_INPUT_FIELD_TITLE}
				onChangeText={onChangeName}
				error={errors?.name}
			/>

			<TextInput
				placeholder={LABELS.PASSWORD_PLACEHOLDER}
				title={LABELS.PASSWORD_INPUT_FIELD_TITLE}
				onChangeText={onChangePassword}
				error={errors?.password}
			/>

			<Button title={LABELS.SIGNUP_BUTTON_TEXT} onPress={onPressSubmit} />

		</View>
	);
};

export default SignupForm;
