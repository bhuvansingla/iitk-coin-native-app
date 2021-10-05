import React from "react";
import LoginForm from "./Login";
import SignUpForm from "./SignUp";
import OtpForm from "./Otp";
import { View } from "react-native";

interface Props {
    form: "Login" | "SignUp" | "OTP"
}

const Forms: React.FC<Props> = ({ form }) => {
	
	if (form == "Login") {
		return <LoginForm />;
	}

	if (form == "SignUp") {
		return <SignUpForm />;
	}

	if (form == "OTP") {
		return <OtpForm />;
	}

	return <View />;
	
};

export default Forms;
