/* eslint-disable linebreak-style */
import React from "react";
import { View } from "react-native";
import { Text } from "components"; 
import styles from "../screen.styles";
import { LABELS } from "constant";
import OtpForm from "components/Forms/Otp";

const OtpPage: () => JSX.Element = () => {
    
	// Verify OTP form
	const otpPage = (

		<View style={styles.contentContainer}>

			<Text.Heading title={LABELS.VERIFY_OTP_FORM_TITLE} />
			<View style={styles.formContainer}>
				<OtpForm/>
				<Text.Footer title={LABELS.OTP_INPUT_FOOTER} link={LABELS.OTP_INPUT_LINK} onPress={() => { console.log("Generating OTP"); }} />
		
			</View>
            
		</View>
	);

	// render
	return (
		otpPage
	);
};

export default OtpPage;