import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";

import store from "redux-store";

import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import RootScreen from "./screens";

import { COLORS } from "styles";
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from "@expo-google-fonts/open-sans";

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
					<RootScreen />
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
