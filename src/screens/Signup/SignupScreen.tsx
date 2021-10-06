import React from "react";

import { useDispatch } from "react-redux";
import { setCurrentScreen } from "redux-store/actions";

import { View } from "react-native";
import { Text } from "components";
import SignupForm from "components/Forms/SignUp";

import styles from "../screen.styles";

import { LABELS } from "constant";
import { ScreenType } from "screens/screen.types";


const SignupScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	const onPressFooter = () => {
		dispatch(setCurrentScreen(ScreenType.LOGIN));
	};

	return (
		<View style={styles.contentContainer}>

			<Text.Heading title={LABELS.SIGNUP_FORM_TITLE} />

			<View style={styles.formContainer}>

				<SignupForm />

				<Text.Footer title={LABELS.SIGNIN_FOOTER} link={LABELS.SIGNIN_LINK} onPress={() => onPressFooter()} />

			</View>
		</View>
	);
};

export default SignupScreen;
