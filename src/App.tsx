
import { registerRootComponent } from "expo";
import React,{useCallback,useState} from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Text } from "components";
import { Colors } from "styles";

import  AppLoading  from "expo-app-loading";

import { 
	useFonts,
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,   
} from "@expo-google-fonts/open-sans";

function App() {

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
	} else 

	{
		return (
			<View style={styles.container}>
				<Text.Title>IIT KANPUR</Text.Title>
				<Text.Heading Title ="CREATE A WALLET"/>
				<TextInput
					placeholder="Enter roll no. here"
					Title="IITK Roll No."
					onChangeText={onChangeRollno}
					value={Rollno}
				/>

				<TextInput
					placeholder="Enter Name"
					Title="Name"
					onChangeText={onChangeName}
					value={Name}
				/>

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
		backgroundColor:Colors.White,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default registerRootComponent(App);
