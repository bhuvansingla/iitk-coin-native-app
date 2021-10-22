import React, { useEffect } from "react";
import { registerRootComponent } from "expo";
import { Provider, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import FlashMessage from "react-native-flash-message";

import { COLORS } from "styles";
import store from "redux-store";
import { CheckToken } from "callbacks";

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

	const dispatch = useDispatch();
	useEffect(() => {
		CheckToken(dispatch);
	});
	
	return (
		(!fontsLoaded) ? <AppLoading />
			: (
				<View style={styles.container}>
					<RootScreen />
					<FlashMessage position="bottom" floating={true} icon="auto" style={styles.flash} />
				</View>
			)
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
	}
});

const AppWrapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default registerRootComponent(AppWrapper);
