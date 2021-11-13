import React from "react";
import { View } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

import Text from "../Title";
import styles from "./Heading.styles";
interface Props {
	title: string;
	isFetched?: boolean;
}

const Heading: React.FC<Props> = (props) => {

	const { title, isFetched=true } = props;

	const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

	if (isFetched) {
		return (
			<View style={styles.container}>
				<Text bold style={styles.text}>
					{title}
				</Text>
			</View>
		);
	} else {
		return (
			<View style={styles.wrapper}>
				<ShimmerPlaceholder
					visible={isFetched}
					style={styles.shimmer}
				/>
			</View>
		);
	}
};

export default Heading;
