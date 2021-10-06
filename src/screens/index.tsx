import { BottomSheet, Header } from "components";
import React from "react";
import LoginScreen from "./Login/LoginScreen";
import SignupScreen from "./Signup/SignupScreen";
import { ScreenType } from "./screen.types";
import { useSelector } from "react-redux";
import { AppState } from "redux-store/reducers";


const RootScreen: () => JSX.Element = () => {
	
	const shrinkedHeader = <Header.Shrinked />;
	const expandedHeader = <Header.Expanded />;

	const currentScreen: ScreenType = useSelector((state: AppState) => state.display.currentScreen);

	return (
		<BottomSheet expandedHeader={expandedHeader} shrinkedHeader={shrinkedHeader}>
			{currentScreen === ScreenType.LOGIN && <LoginScreen />}
			{currentScreen === ScreenType.SIGNUP && <SignupScreen />}
		</BottomSheet>
	);
};

export default RootScreen;