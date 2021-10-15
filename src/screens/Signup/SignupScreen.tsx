import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";

import { setCurrentScreen } from "redux-store/actions";
import { Text } from "components";
import SignupForm from "components/Forms/Signup";
import VerifyOtpForm from "components/Forms/VerifyOtp";
import { LABELS } from "constant";
import { ScreenType } from "screens/screen.types";
import { OTPParams, SignupParams } from "api/auth";
import { otpCallback } from "callbacks/otp";
import { signupCallback } from "callbacks/signup";
import { validator } from "utils";

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

	const [signupFormError, setSignupFormError] = useState(validator.forms.signup.emptyError);
	const [verifyOTPError, setVerifyOTPError] = useState(validator.forms.verifyOTP.emptyError);

	const onPressFooter = () => {
		dispatch(setCurrentScreen(ScreenType.LOGIN));
	};

	const onPressSignup = () => {
		const currentSignupError = validator.forms.signup.validate(name, rollNo, password);
		setSignupFormError(currentSignupError);

		if (currentSignupError != validator.forms.signup.emptyError) {
			return;
		}

		// Make the API Call here to request OTP.
		const otpParams: OTPParams = {RollNo: rollNo};
		otpCallback(otpParams).then((success) => {
			if(success) {
				setSignupStage(SignupStage.VERIFY_OTP);
			} else {
			// TODO: Handle the error
				console.log("Can't send OTP");
			}
		});
	};

	const onPressVerifyOtp = () => {
		const currentVerifyOTPError = validator.forms.verifyOTP.validate(otp);
		setVerifyOTPError(currentVerifyOTPError);

		if (currentVerifyOTPError != validator.forms.verifyOTP.emptyError) {
			return;
		}

		// Make the signup API call here.
		console.log(name, password, rollNo, otp);
		const signupParams: SignupParams = { RollNo: rollNo, Password: password, OTP: otp };
		signupCallback(signupParams).then((success) => {
			if(success) {
				dispatch(setCurrentScreen(ScreenType.LOGIN));
			} else {
				// TODO: Handle the error
				console.log("Failed");
			}
		});
	};

	return (
		<View style={styles.contentContainer}>
			{signupStage === SignupStage.SIGNUP_DETAILS &&
				<React.Fragment>

					<Text.Heading title={LABELS.SIGNUP_FORM_TITLE} />

					<View style={styles.containerChildWrapper}>

						<SignupForm setName={setName} setPassword={setPassword} setRollNo={setRollNo} onPressSubmit={onPressSignup} signupFormError={signupFormError} />

						<Text.Footer title={LABELS.SIGNIN_FOOTER} link={LABELS.SIGNIN_LINK} onPress={() => onPressFooter()} />

					</View>
				</React.Fragment>
			}
			{signupStage === SignupStage.VERIFY_OTP &&
				<React.Fragment>

					<Text.Heading title={LABELS.VERIFY_OTP_FORM_TITLE} />

					<View style={styles.containerChildWrapper}>

						<VerifyOtpForm setOTP={setOTP} onPressSubmit={onPressVerifyOtp} verifyOTPError={verifyOTPError} />

						<Text.Footer title={LABELS.SIGNIN_FOOTER} link={LABELS.SIGNIN_LINK} onPress={() => onPressFooter()} />

					</View>
				</React.Fragment>
			}
		</View>
	);
};

export default SignupScreen;
