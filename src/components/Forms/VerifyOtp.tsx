import React from "react";
import { View } from "react-native";

import { NumericInput } from "components/TextInput";
import Button from "components/Button";
import { LABELS, LENGTH } from "constant";

interface Props {
	setOTP: (otp: string) => void
	onPressSubmit: () => void
}

const VerifyOtpForm: React.FC<Props> = (props) => {

	const { setOTP: setOTP, onPressSubmit } = props;

	const onChangeOTP = (OTP: string) => {
		if (OTP.length < LENGTH.OTP) {
			setOTP(OTP);
		}
	};

	return (

		<View>

			<NumericInput
				placeholder={LABELS.OTP_PLACEHOLDER}
				title={LABELS.OTP_INPUT_FIELD_TITLE}
				onChangeText={onChangeOTP}
			/>

			<Button title={LABELS.VERIFY_OTP_BUTTON_TEXT} onPress={() => onPressSubmit()} />

		</View>
	);

};

export default VerifyOtpForm;
