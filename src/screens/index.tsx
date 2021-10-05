import { BottomSheet, Header } from "components";
import React from "react";
import LoginPage from "./Login/LoginScreen";
import SignUpPage from "./SignUp/SignUpScreen";
import OtpPage from "./Otp/OtpScreen";

const shrinkedHeader = <Header.Shrinked />;
const expandedHeader = <Header.Expanded />;

const Login: () => JSX.Element = () => {

	return (
		<BottomSheet expandedHeader={expandedHeader} shrinkedHeader={shrinkedHeader}>
			<LoginPage/>
		</BottomSheet>
	);
};

const SignUp: () => JSX.Element = () => {

	return (
		<BottomSheet expandedHeader={expandedHeader} shrinkedHeader={shrinkedHeader}>
			<SignUpPage/>
		</BottomSheet>
	);
};

const OTP: () => JSX.Element = () => {

	return (
		<BottomSheet expandedHeader={expandedHeader} shrinkedHeader={shrinkedHeader}>
			<OtpPage/>
		</BottomSheet>
	);
};

export default { Login, SignUp, OTP };
