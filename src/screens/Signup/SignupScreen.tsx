import React from "react";
import { View } from "react-native";
import { Text } from "components";
import styles from "../screen.styles";
import { LABELS } from "constant";
import SignUpForm from "components/Forms/SignUp";

const SignupScreen: () => JSX.Element = () => {

	// Sign Up form
	const signUpPage = (

		<View style={styles.contentContainer}>
            
			<Text.Heading title={LABELS.SIGNUP_FORM_TITLE} />

			<View style={styles.formContainer}>

				<SignUpForm />
				<Text.Footer title={LABELS.SIGNIN_FOOTER} link={LABELS.SIGNIN_LINK} onPress={() => { console.log("Go to Sign In Page"); }} />
			
			</View>
			
		</View>
	);

	// render
	return (
		signUpPage
	);

};

export default SignupScreen;
