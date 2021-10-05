import { registerRootComponent } from "expo";
import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "styles";
import AppLoading from "expo-app-loading";
import store from "redux-store";
import { Provider } from "react-redux";
import Screen from "./screens";

import {
	useFonts,
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

function App() {

	const [fontsLoaded] = useFonts({
		OpenSans_400Regular,
		OpenSans_600SemiBold,
		OpenSans_700Bold,
	});

	return (

		(!fontsLoaded) ? <AppLoading />
			: (
				<View style={styles.container}>
					{/* input "Login" or "SignUp" or "OTP*/}
					<Screen.OTP />	
				</View>
			)
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.WHITE,
		alignItems: "center",
		justifyContent: "center",
	},
});

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default registerRootComponent(AppWrapper);
