import React from "react";
import {View} from "react-native";

import Text from "../Text";
import styles from "./Header.styles";

import  AppLoading  from "expo-app-loading";

import { 
	useFonts,
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,   
} from "@expo-google-fonts/open-sans";

interface Props {
  title: string;
}

const footer: React.FC<Props> = (props) => {

	const {title} = props;

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
				<Text.title bold style ={styles.text}>
					{title}
				</Text.title>	
			</View>
		);
	}
};

export default footer;
