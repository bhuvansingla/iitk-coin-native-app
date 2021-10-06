import React from "react";

import { useDispatch } from "react-redux";
import { setCurrentScreen } from "redux-store/actions";

import { View } from "react-native";
import { Text } from "components";
import LoginForm from "components/Forms/Login";

import styles from "../screen.styles";

import { LABELS } from "constant";
import { ScreenType } from "screens/screen.types";


const LoginScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	const onPressFooter = () => {
		dispatch(setCurrentScreen(ScreenType.SIGNUP));
	};

	return (
		<View style={styles.contentContainer}>

			<Text.Heading title={LABELS.SIGNIN_FORM_TITLE} />

			<View style={styles.formContainer}>

				<LoginForm />

				<Text.Footer title={LABELS.CREATE_WALLET_FOOTER} link={LABELS.CREATE_WALLET_LINK} onPress={() => onPressFooter()} />

			</View>
		</View>
	);
};

export default LoginScreen;
