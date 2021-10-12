import React from "react";
import { View } from "react-native";
import Ripple from "react-native-material-ripple";
import { Ionicons } from "@expo/vector-icons";

import Text from "components/Text/Title";
import { FONT, COLORS } from "styles";

import styles from "./PageTitle.styles";

interface Props {
	title: string;
	onPressBack: () => void;
}

const fontSize = FONT.SIZE.H2;
const fontAwesomeSize = fontSize * 1.3;

const PageTitle:React.FC<Props> = ({title, onPressBack}) => {
	return (

		<View style={styles.header}>
			<Ripple
				rippleDuration={360}
				rippleColor={COLORS.DARK_TEAL}
				rippleContainerBorderRadius={20}
				onPress={onPressBack}>
				<Ionicons name="arrow-back-outline" size={fontAwesomeSize} color={COLORS.BLACK} />
			</Ripple>
			<Text semibold style={[styles.heading, { fontSize }]}>{title}</Text>
		</View>

	);
};

export default PageTitle;
