import React from "react";
import { View } from "react-native";

import { TextInput } from "components/TextInput";
import Button from "components/Button";
import { LABELS } from "constant";
import { validator } from "utils";

interface Props {
	setOTP: (otp: string) => void;
	onPressSubmit: () => void;
	isClicked?: boolean;
	errors?: typeof validator.forms.verifyOTP.emptyError;
}

const VerifyOtpForm: React.FC<Props> = (props) => {

	const { setOTP, onPressSubmit, errors, isClicked } = props;

	const onChangeOTP = (OTP: string) => {
		setOTP(OTP);
	};

	const label = isClicked ? LABELS.VERIFY_OTP_BUTTON_TEXT_CLICKED : LABELS.VERIFY_OTP_BUTTON_TEXT;
	
	return (

		<View>

			<TextInput numeric
				placeholder={LABELS.OTP_PLACEHOLDER}
				title={LABELS.OTP_INPUT_FIELD_TITLE}
				onChangeText={onChangeOTP}
				error={errors?.otp}
				last={true}
				onSubmitEditing={onPressSubmit}
			/>

			<Button title={label} onPress={onPressSubmit} disabled={isClicked}/>

		</View>
	);

};

export default VerifyOtpForm;
