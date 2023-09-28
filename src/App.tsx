import React, { useEffect, useState } from "react";
import { registerRootComponent } from "expo";
import { Provider, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { FontAwesome, AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import FlashMessage from "react-native-flash-message";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { COLORS } from "styles";
import store from "redux-store";
import { setCurrentScreen, setIsAuthenticated, setRollNo } from "redux-store/actions";
import { ScreenType } from "screens/screen.types";
import { isLoggedIn } from "callbacks";

import RootScreen from "./screens";

function App() {

	const [fontsLoaded] = useFonts({
		OpenSans_400Regular,
		OpenSans_600SemiBold,
		OpenSans_700Bold,
		...FontAwesome.font,
		...AntDesign.font,
		...Ionicons.font,
		...MaterialIcons.font,
	});

	const dispatch = useDispatch();
	const [checkLoggedIn, setCheckLoggedIn] = useState(false);

	useEffect(() => {
		setCheckLoggedIn(false);
		dispatch(setCurrentScreen(ScreenType.LOGIN));
		dispatch(setIsAuthenticated(false));
		isLoggedIn().then(({ Status, RollNo }) => {
			setCheckLoggedIn(true);
			if (Status) {
				dispatch(setCurrentScreen(ScreenType.HOME));
				dispatch(setIsAuthenticated(true));
				dispatch(setRollNo(RollNo));
			}
		});
	}, [dispatch]);

	return (
		(fontsLoaded && checkLoggedIn) ? 
			(
				<View style={styles.container}>
					<RootScreen />
					<FlashMessage position="bottom" floating={true} icon="auto" style={styles.flash} />
				</View>
			) 
			: <AppLoading />
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: COLORS.WHITE,
		flex: 1,
		justifyContent: "center",
	},
	flash: {
		alignItems: "center",
		borderRadius: 20,
	},
});

const AppWrapper = () => {
	return (
		// eslint-disable-next-line react-native/no-inline-styles
		<GestureHandlerRootView style={{ flex: 1 }}>
			<BottomSheetModalProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	);
};

export default registerRootComponent(AppWrapper);
