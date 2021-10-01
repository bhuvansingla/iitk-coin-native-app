
import { registerRootComponent } from "expo";
import React, { useCallback, useState } from "react";

import { StyleSheet, View } from "react-native";
import { TextInput, Text, Button } from "components";
import { COLORS } from "styles";
import AppLoading from "expo-app-loading";

import { AppState } from "redux-store/reducers";
import store from "redux-store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "redux-store/actions";


import {
	useFonts,
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

function App() {

	const dispatch = useDispatch();
	const isAuthenticated: boolean = useSelector((state: AppState) => state.auth.isAuthenticated);

	const [Name, setName] = useState<string>("");
	const [Rollno, setRollno] = useState<string>("");
	const onChangeName = useCallback((name: string) => {
		if (name.length < 50) {
			setName(name);
		}
	}, []);


	const onChangeRollno = useCallback((name: string) => {
		if (name.length < 50) {
			setRollno(name);
		}
	}, []);

	const [fontsLoaded] = useFonts({
		OpenSans_400Regular,
		OpenSans_600SemiBold,
		OpenSans_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<Text.Title>IIT KANPUR</Text.Title>
				<Text.Heading title="CREATE A WALLET" />
				<TextInput
					placeholder="Enter roll no. here"
					title="IITK Roll No."
					onChangeText={onChangeRollno}
					value={Rollno}
				/>

				<TextInput
					placeholder="Enter Name"
					title="Name"
					onChangeText={onChangeName}
					value={Name}
				/>

				{<Button title={isAuthenticated ? "Sign out" : "Sign in"} onPress={() => { dispatch(setIsAuthenticated(!isAuthenticated)); }} />}

				{/* <Button Title="Sign in" onPress={()=>{}}/>

				<Text.Footer
					onPress={() => {}}
					Title="Don't have a wallet? "
					Link="Create now"
				/> */}

			</View>

		);
	}
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
