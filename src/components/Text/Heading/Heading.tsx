import React from "react";
import {View} from "react-native";

import Text from "../Title";
import styles from "./Heading.styles";
interface Props {
  Title: string;
}

const Heading: React.FC<Props> = (props) => {

	const {Title} = props;

	return (
		<View style={styles.container}>
			<Text bold style ={styles.text}>
				{Title}
			</Text>	
		</View>
	);
};

export default Heading;
