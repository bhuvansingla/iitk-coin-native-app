import React from "react";
import { View } from "react-native";

import { TextInput } from "components/TextInput";
import Button from "components/Button";
import { LABELS } from "constant";
import { validator } from "utils";

interface Props {
	setName: (name: string) => void;
	setPassword: (password: string) => void;
	setConfirmPassword: (confirmPassword: string) => void;
	setRollNo: (rollNo: string) => void;
	onPressSubmit: () => void;
	isClicked?: boolean;
	errors?: typeof validator.forms.signup.emptyError;
}

const SignupForm: React.FC<Props> = (props) => {

	const { setName, setPassword, setConfirmPassword, setRollNo, onPressSubmit, errors, isClicked } = props;

	const onChangeName = (name: string) => {
		setName(name.trim());
	};

	const onChangeRollNo = (rollNo: string) => {
		setRollNo(rollNo);
	};

	const onChangePassword = (password: string) => {
		setPassword(password);
	};

	const onChangeConfirmPassword = (confirmPassword: string) => {
		setConfirmPassword(confirmPassword);
	};

	const label = isClicked ? LABELS.SIGNUP_BUTTON_TEXT_CLICKED : LABELS.SIGNUP_BUTTON_TEXT;

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

			<TextInput password
				placeholder={LABELS.PASSWORD_PLACEHOLDER}
				title={LABELS.PASSWORD_INPUT_FIELD_TITLE}
				onChangeText={onChangePassword}
				error={errors?.password}
			/>

			<TextInput password
				placeholder={LABELS.CONFIRM_PASSWORD_PLACEHOLDER}
				title={LABELS.CONFIRM_PASSWORD_INPUT_FIELD_TITLE}
				onChangeText={onChangeConfirmPassword}
				error={errors?.confirmPassword}
				last={true}
				onSubmitEditing={onPressSubmit}
			/>

			<Button title={label} onPress={onPressSubmit} disabled={isClicked} />

		</View>
	);
};

export default SignupForm;
