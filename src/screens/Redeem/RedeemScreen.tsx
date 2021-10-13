import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

import { Button, Text } from "components";
import { ScreenType } from "screens/screen.types";
import { setCurrentScreen } from "redux-store/actions";

import styles from "../screen.styles";

const RedeemScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	return (
		<View style={styles.contentContainer}>
			<Text.Heading title="Redeem" />
			<Button title="Home" onPress={() => { dispatch(setCurrentScreen(ScreenType.HOME)); }} />
		</View>
	);
};

export default RedeemScreen;
