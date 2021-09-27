import React from "react";

import Text from "../Text";
import { Colors } from "styles";
import styles from "./Sample.styles";


import Ripple from "react-native-material-ripple";
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

}

const sample: React.FC<Props> = (props) => {

	const {onPress, title} = props;

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
		
            
			<Ripple	rippleOpacity={0.25}
				rippleCentered={true} 
				rippleSize={3500}
				rippleColor = {Colors.darkteal}
				rippleDuration={1300}
				rippleContainerBorderRadius = {20}
				onPress={onPress} style={styles.container}>
                 
				<Text.title white style ={styles.text}>
					{title}	
				</Text.title>
                   
			</Ripple>
			
		);
	}
};

export default sample;
