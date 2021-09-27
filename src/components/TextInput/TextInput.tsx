import React from "react";
import { TextInput as TextInputRN, View} from "react-native";

import Text from "../Text";
import styles from "./TextInput.styles";

import  AppLoading  from "expo-app-loading";

import { 
	useFonts,
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,   
} from "@expo-google-fonts/open-sans";

interface Props {
  placeholder?: string;
  title: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<Props> = (props) => {

	const {onChangeText, value,placeholder,title} = props;

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
      
				<Text.title style ={styles.containerOptionalTitle}>{title}</Text.title>
        
				<TextInputRN
					placeholder={placeholder}
					style={styles.input}
					onChangeText={onChangeText}
					value={value}
				/>
        
			</View>
		);
	}
};

export default TextInput;
