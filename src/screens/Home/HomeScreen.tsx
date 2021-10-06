import React from "react";

import { useDispatch } from "react-redux";
import { setCurrentScreen, setIsAuthenticated } from "redux-store/actions";

import { View } from "react-native";
import { Button } from "components";

import styles from "../screen.styles";

import { ScreenType } from "screens/screen.types";


const HomeScreen: () => JSX.Element = () => {

	const dispatch = useDispatch();

	return (
		<View style={styles.contentContainer}>
			<Button title="Logout" onPress={() => { dispatch(setIsAuthenticated(false)); dispatch(setCurrentScreen(ScreenType.LOGIN)); }} />
		</View>
	);
};

export default HomeScreen;
