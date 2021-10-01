import React from "react";
import { View } from "react-native";

import Text from "../Title";
import styles from "./Heading.styles";
interface Props {
	title: string;
}

const Heading: React.FC<Props> = (props) => {

	const { title } = props;

	return (
		<View style={styles.container}>
			<Text bold style={styles.text}>
				{title}
			</Text>
		</View>
	);
};

export default Heading;
