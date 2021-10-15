import React from "react";
import { View, StatusBar } from "react-native";

import Text from "components/Text";
import Image from "components/SVGImage";
import { COLORS } from "styles";
import { LABELS } from "constant";

import styles from "./Header.styles";

const Expanded: () => JSX.Element = () => {
	return (
		<View style={styles.expanded}>
			<StatusBar backgroundColor={COLORS.MAIN_BG} barStyle="light-content" />
			<Image name="Crow" />
			<View style={styles.container}>
				<Text.Title white>{LABELS.IIT_KANPUR}</Text.Title>
				<Image name="CoinTypographyLogo" size="35%" style={{}} />
				<Text.Title white style={styles.about}>{LABELS.ABOUT}</Text.Title>
			</View>
		</View>
	);
};

const Shrinked: () => JSX.Element = () => {
	return (
		<View style={styles.shrinked}>
			<StatusBar backgroundColor={COLORS.MAIN_BG} barStyle="light-content" />
			<Image name="CoinTypographyLogo" />
		</View>
	);
};

export default { Expanded, Shrinked };
