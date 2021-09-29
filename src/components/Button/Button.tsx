import React from "react";

import Text from "../Text";
import { Colors } from "styles";
import styles from "./Button.styles";

import Ripple from "react-native-material-ripple";

interface Props {
  Title: string;
  onPress: () => void;

}

const Button: React.FC<Props> = (props) => {

	const {onPress, Title} = props;
	
	return (
            
		<Ripple	rippleOpacity={0.25}
			rippleCentered={true} 
			rippleSize={3500}
			rippleColor = {Colors.DarkTeal}
			rippleDuration={1300}
			rippleContainerBorderRadius = {20}
			onPress={onPress} style={styles.container}>
                 
			<Text.Title white bold style ={styles.text}>
				{Title}	
			</Text.Title>
                   
		</Ripple>
			
	);
	
};

export default Button;
