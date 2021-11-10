import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

import styles from "./Title.styles";
import mainStyle from "../styles";

interface Props {
	style?: StyleProp<TextStyle>;
	children: string | React.ReactNode;
	black?: boolean;
	link?: boolean;
	darkgrey?: boolean;
	white?: boolean;
	center?: boolean;
	bold?: boolean;
	semibold?: boolean;
	footer?: boolean;
	red?: boolean;
	small?: boolean;
}

export default function Title(props: Props): React.ReactElement {
	const customStyle = [styles.default, props.style];
	const { black, link, darkgrey, bold, white, center, semibold, footer, red, small } = props;

	if (black) {
		customStyle.push(mainStyle.black);
	}

	if (link) {
		customStyle.push(mainStyle.link);
	}

	if (darkgrey) {
		customStyle.push(mainStyle.darkgrey);
	}

	if (white) {
		customStyle.push(mainStyle.white);
	}

	if (center) {
		customStyle.push(mainStyle.center);
	}

	if (bold) {
		customStyle.push(mainStyle.Bold);
	}

	if (semibold) {
		customStyle.push(mainStyle.SemiBold);
	}

	if (footer) {
		customStyle.push(mainStyle.secondary);
	}

	if (red) {
		customStyle.push(mainStyle.red);
	}
	
	if(small) {
		customStyle.push(mainStyle.small);
	}

	return <Text {...props} style={customStyle} />;
}
