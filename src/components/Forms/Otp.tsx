import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "components";
import { LABELS, LENGTH } from "constant";

const OtpForm: () => JSX.Element = () => {

	const [OTP, setOTP] = useState<string>("");

	const onChangeOTP = (name: string) => {
		if (name.length < LENGTH.OTP) {
			setOTP(name);
		}
	};

	// Verify OTP form
	const verifyOtpForm = (

		<View>

			<TextInput
				placeholder={LABELS.OTP_PLACEHOLDER}
				title={LABELS.OTP_INPUT_FIELD_TITLE}
				onChangeText={onChangeOTP}
				value={OTP}
			/>

			<Button title= {LABELS.VERIFY_OTP_BUTTON_TEXT} onPress={() => {console.log(OTP);}}/>
			
		</View>
	);

	// render
	return (
		verifyOtpForm
	);
};

export default OtpForm;