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
import { requestOtp , signup } from "callbacks";
import { validator } from "utils";

import styles from "../screen.styles";

const SignupScreen: () => JSX.Element = () => {

	const enum SignupStage {
		SIGNUP_DETAILS = "SIGNUP DETAILS",
		VERIFY_OTP = "VERIFY OTP"
	}

	const dispatch = useDispatch();

	const [signupStage, setSignupStage] = useState<SignupStage>(SignupStage.SIGNUP_DETAILS);

	const [clickedSignup, setClickedSignup] = useState(false);
	const [clickedVerifyOtp, setClickedVerifyOtp] = useState(false);

	const [name, setName] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [rollNo, setRollNo] = useState<string>("");
	const [otp, setOTP] = useState<string>("");

	const [signupFormError, setSignupFormError] = useState(validator.forms.signup.emptyError);
	const [verifyOTPError, setVerifyOTPError] = useState(validator.forms.verifyOTP.emptyError);

	const onPressFooter = () => {
		dispatch(setCurrentScreen(ScreenType.LOGIN));
	};

	const onPressSignup = () => {
		setClickedSignup(true);
		const currentSignupError = validator.forms.signup.validate(name, rollNo, password,confirmPassword);
		setSignupFormError(currentSignupError);

		if (validator.forms.signup.isError(currentSignupError)) {
			setClickedSignup(false);
			return;
		}

		const otpParams: OTPParams = {RollNo: rollNo};
		requestOtp(otpParams).then((success) => {
			setClickedSignup(false);
			if(success) {
				setSignupStage(SignupStage.VERIFY_OTP);
			}
		}).catch(() => {
			setClickedSignup(false);
		});
	};

	const onPressVerifyOtp = () => {
		setClickedVerifyOtp(true);
		const currentVerifyOTPError = validator.forms.verifyOTP.validate(otp);
		setVerifyOTPError(currentVerifyOTPError);

		if (validator.forms.verifyOTP.isError(currentVerifyOTPError)) {
			setClickedVerifyOtp(false);
			return;
		}

		const signupParams: SignupParams = { Name: name, RollNo: rollNo, Password: password, OTP: otp };
		signup(signupParams).then((success) => {
			setClickedVerifyOtp(false);
			if(success) {
				dispatch(setCurrentScreen(ScreenType.LOGIN));
			}
		}).catch(() => {
			setClickedVerifyOtp(false);
		});
	};

	return (
		<View style={styles.contentContainer}>
			{signupStage === SignupStage.SIGNUP_DETAILS &&
				<React.Fragment>

					<Text.Heading title={LABELS.SIGNUP_FORM_TITLE} />

					<View style={styles.containerChildWrapper}>

						<SignupForm setName={setName} setPassword={setPassword} setConfirmPassword={setConfirmPassword} setRollNo={setRollNo} onPressSubmit={onPressSignup} errors={signupFormError} isClicked={clickedSignup} />

						<Text.Footer title={LABELS.SIGNIN_FOOTER} link={LABELS.SIGNIN_LINK} onPress={() => onPressFooter()} />

					</View>
				</React.Fragment>
			}
			{signupStage === SignupStage.VERIFY_OTP &&
				<React.Fragment>

					<Text.Heading title={LABELS.VERIFY_OTP_FORM_TITLE} />

					<View style={styles.containerChildWrapper}>

						<VerifyOtpForm setOTP={setOTP} onPressSubmit={onPressVerifyOtp} errors={verifyOTPError} isClicked={clickedVerifyOtp}/>

						<Text.Footer title={LABELS.SIGNIN_FOOTER} link={LABELS.SIGNIN_LINK} onPress={() => onPressFooter()} />

					</View>
				</React.Fragment>
			}
		</View>
	);
};

export default SignupScreen;
