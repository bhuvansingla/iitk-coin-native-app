import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";

import { setCurrentScreen } from "redux-store/actions";
import { Text } from "components";
import SignupForm from "components/Forms/Signup";
import VerifyOtpForm from "components/Forms/VerifyOtp";
import { LABELS } from "constant";
import { ScreenType } from "screens/screen.types";

import styles from "../screen.styles";

const SignupScreen: () => JSX.Element = () => {

	const enum SignupStage {
		SIGNUP_DETAILS = "SIGNUP DETAILS",
		VERIFY_OTP = "VERIFY OTP"
	}

	const dispatch = useDispatch();

	const [signupStage, setSignupStage] = useState<SignupStage>(SignupStage.SIGNUP_DETAILS);

	const [name, setName] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [rollNo, setRollNo] = useState<string>("");
	const [otp, setOTP] = useState<string>("");

	const onPressFooter = () => {
		dispatch(setCurrentScreen(ScreenType.LOGIN));
	};

	const onPressSignup = () => {
		// Make the API Call here to request OTP.
		setSignupStage(SignupStage.VERIFY_OTP);
	};

	const onPressVerifyOtp = () => {
		// Make the signup API call here.
		console.log(name, password, rollNo, otp);
		dispatch(setCurrentScreen(ScreenType.LOGIN));
	};

	return (
		<View style={styles.contentContainer}>
			{signupStage === SignupStage.SIGNUP_DETAILS &&
				<React.Fragment>

					<Text.Heading title={LABELS.SIGNUP_FORM_TITLE} />

					<View style={styles.containerChildWrapper}>

						<SignupForm setName={setName} setPassword={setPassword} setRollNo={setRollNo} onPressSubmit={onPressSignup} />

						<Text.Footer title={LABELS.SIGNIN_FOOTER} link={LABELS.SIGNIN_LINK} onPress={() => onPressFooter()} />

					</View>
				</React.Fragment>
			}
			{signupStage === SignupStage.VERIFY_OTP &&
				<React.Fragment>

					<Text.Heading title={LABELS.VERIFY_OTP_FORM_TITLE} />

					<View style={styles.containerChildWrapper}>

						<VerifyOtpForm setOTP={setOTP} onPressSubmit={onPressVerifyOtp} />

						<Text.Footer title={LABELS.SIGNIN_FOOTER} link={LABELS.SIGNIN_LINK} onPress={() => onPressFooter()} />

					</View>
				</React.Fragment>
			}
		</View>
	);
};

export default SignupScreen;
