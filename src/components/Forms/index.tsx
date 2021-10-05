import React from "react";
import LoginForm from "./Login";
import SignUpForm from "./SignUp";
import OtpForm from "./Otp";
import { View } from "react-native";

interface Props {
    name: "Login" | "SignUp" | "OTP"
}

const Forms: React.FC<Props> = ({ name }) => {
	
	if (name == "Login") {
		return <LoginForm />;
	}

	if (name == "SignUp") {
		return <SignUpForm />;
	}

	if (name == "OTP") {
		return <OtpForm />;
	}

	return <View />;
};

export default Forms;

