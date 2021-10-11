import React from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";

import { setCurrentScreen, setIsAuthenticated } from "redux-store/actions";
import { Button } from "components";
import { ScreenType } from "screens/screen.types";

import styles from "../screen.styles";

const HomeScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	return (
		<View style={styles.contentContainer}>
			<Button title="Logout" onPress={() => { dispatch(setIsAuthenticated(false)); dispatch(setCurrentScreen(ScreenType.LOGIN)); }} />
		</View>
	);
};

export default HomeScreen;
