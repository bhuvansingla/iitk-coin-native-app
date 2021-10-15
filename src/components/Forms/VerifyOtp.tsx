import React from "react";
import { View } from "react-native";

import { NumericInput } from "components/TextInput";
import Button from "components/Button";
import { LABELS } from "constant";
import { validator } from "utils";

interface Props {
	setOTP: (otp: string) => void;
	onPressSubmit: () => void;
	verifyOTPError?: typeof validator.forms.verifyOTP.emptyError;
}

const VerifyOtpForm: React.FC<Props> = (props) => {

	const { setOTP: setOTP, onPressSubmit, verifyOTPError } = props;

	const onChangeOTP = (OTP: string) => {
		setOTP(OTP);
	};

	return (

		<View>

			<NumericInput
				placeholder={LABELS.OTP_PLACEHOLDER}
				title={LABELS.OTP_INPUT_FIELD_TITLE}
				onChangeText={onChangeOTP}
				error={verifyOTPError?.otp}
			/>

			<Button title={LABELS.VERIFY_OTP_BUTTON_TEXT} onPress={() => onPressSubmit()} />

		</View>
	);

};

export default VerifyOtpForm;
