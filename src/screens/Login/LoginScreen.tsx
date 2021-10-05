import React from "react";
import { View } from "react-native";
import { Text } from "components";
import styles from "../screen.styles";
import { LABELS} from "constant";
import LoginForm from "components/Forms/Login";

const LoginPage: () => JSX.Element = () => {

	// Login form
	const loginPage = (

		<View style={styles.contentContainer}>

			<Text.Heading title={LABELS.SIGNIN_FORM_TITLE} />
			<View style={styles.formContainer}>
				<LoginForm/>
				<Text.Footer title={LABELS.CREATE_WALLET_FOOTER} link={LABELS.CREATE_WALLET_LINK} onPress={() => {console.log("Create Wallet");}} />
			</View>

		</View>
	);

	// render
	return (
		loginPage
	);
};

export default LoginPage;