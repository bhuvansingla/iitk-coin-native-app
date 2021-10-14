import React, { useEffect } from "react";
import { registerRootComponent } from "expo";
import { Provider, useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";

import { COLORS } from "styles";
import store from "redux-store";
import { postLoginStatus } from "api/auth";
import { deleteToken, getToken } from "secure-store";
import { setCurrentScreen, setIsAuthenticated } from "redux-store/actions";
import { ScreenType } from "screens/screen.types";

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
		async function checkToken() {
			const token = await getToken();
			if (token) {
				await postLoginStatus(token).then((res) => {
					if (res.Status === 200) {
						dispatch(setIsAuthenticated(true));
						dispatch(setCurrentScreen(ScreenType.HOME));
						console.log("Logged in");
					} else {
						console.log("Not logged in");
						deleteToken().then(() => console.log("Token deleted"));
					}
				});
			} else {
				console.log("No Token");
			}
		}
		checkToken();
	}, []);
	
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
