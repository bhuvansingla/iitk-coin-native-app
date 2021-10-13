import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";

import { COLORS } from "styles";
import store from "redux-store";

import RootScreen from "./screens";

function App() {

	const [fontsLoaded] = useFonts({
		OpenSans_400Regular,
		OpenSans_600SemiBold,
		OpenSans_700Bold,
		...FontAwesome.font,
		...AntDesign.font,
		...Ionicons.font,
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
