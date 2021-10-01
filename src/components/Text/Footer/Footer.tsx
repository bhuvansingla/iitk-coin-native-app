import React from "react";
import { TouchableOpacity, View } from "react-native";

import Text from "../Title";
import styles from "./Footer.styles";

interface Props {
	title: string;
	onPress: () => void;
	link?: string;
}

const Footer: React.FC<Props> = (props) => {

	const { onPress, title, link } = props;

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} activeOpacity={0.6}>
				<Text center darkgrey footer style={styles.text}>
					{title}
					<Text link semibold style={styles.link}>
						{link}
					</Text>
				</Text>
			</TouchableOpacity>
		</View>
	);

};

export default Footer;
