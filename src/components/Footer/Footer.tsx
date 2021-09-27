import React from "react";
import { TextInput as TextInputRN, TouchableOpacity, View} from "react-native";

import Text from "../Text";
import styles from "./Footer.styles";

import  AppLoading  from "expo-app-loading";

import { 
	useFonts,
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,   
} from "@expo-google-fonts/open-sans";

interface Props {
  title: string;
  onPress: () => void;
  titlebold?: string;
}

const footer: React.FC<Props> = (props) => {

	const {onPress, title,titlebold} = props;

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
				<TouchableOpacity onPress={onPress} activeOpacity={0.6}>
					<Text.title center darkgrey footer style ={styles.text}>
						{title}
						<Text.title link style ={styles.boldtitle}>
							{titlebold}
						</Text.title>
					</Text.title>
				</TouchableOpacity>
			</View>
		);
	}
};

export default footer;
