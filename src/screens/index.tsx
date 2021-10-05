import { BottomSheet, Header } from "components";
import React from "react";
import LoginPage from "./Login/LoginScreen";
import SignUpPage from "./SignUp/SignUpScreen";
import OtpPage from "./Otp/OtpScreen";
import { View } from "react-native";
interface Props {
    name: "Login" | "SignUp" | "OTP"
}

const whatever: React.FC<Props> = ({ name }) => {
	const shead = <Header.Shrinked />;
	const fhead = <Header.Expanded />;

	let body= <View/>;

	if (name == "Login") {
		body = <LoginPage />;
	}
	if (name == "SignUp") {
		body= <SignUpPage />;
	}
	if (name == "OTP") {
		body= <OtpPage />;
	}

	return (
		<BottomSheet expandedHeader={fhead} shrinkedHeader={shead}>
			{body}
		</BottomSheet>
	);
};

export default whatever;