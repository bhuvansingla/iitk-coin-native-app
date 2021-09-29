import React from "react";
import {TouchableOpacity, View} from "react-native";

import Text from "../Title";
import styles from "./Footer.styles";

interface Props {
  Title: string;
  onPress: () => void;
  Link?: string;
}

const Footer: React.FC<Props> = (props) => {

	const {onPress, Title, Link} = props;
	
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} activeOpacity={0.6}>
				<Text center darkgrey footer style ={styles.text}>
					{Title}
					<Text link semibold style ={styles.link}>
						{Link}
					</Text>
				</Text>
			</TouchableOpacity>
		</View>
	);
	
};

export default Footer;
