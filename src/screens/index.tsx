import React from "react";
import { useSelector } from "react-redux";

import { BottomSheet, Header } from "components";
import { AppState } from "redux-store/reducers";

import LoginScreen from "./Login/LoginScreen";
import SignupScreen from "./Signup/SignupScreen";
import { ScreenType } from "./screen.types";
import HomeScreen from "./Home/HomeScreen";
import TransferScreen from "./Transfer/TransferScreen";

const RootScreen: () => JSX.Element = () => {

	const shrinkedHeader = <Header.Shrinked />;
	const expandedHeader = <Header.Expanded />;

	const currentScreen: ScreenType = useSelector((state: AppState) => state.display.currentScreen);
	const isAuthenticated: boolean = useSelector((state: AppState) => state.auth.isAuthenticated);

	return (
		<BottomSheet expandedHeader={expandedHeader} shrinkedHeader={shrinkedHeader}>
			{!isAuthenticated ?
				<React.Fragment>
					{currentScreen === ScreenType.LOGIN && <LoginScreen />}
					{currentScreen === ScreenType.SIGNUP && <SignupScreen />}
					{currentScreen === ScreenType.TRANSFER && <TransferScreen/>}
				</React.Fragment>
				:
				<React.Fragment>
					{currentScreen === ScreenType.HOME && <HomeScreen />}
				</React.Fragment>
			}
		</BottomSheet>
	);
};

export default RootScreen;
