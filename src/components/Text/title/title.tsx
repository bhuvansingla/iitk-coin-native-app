import React from "react";
import { Text, StyleProp, TextStyle } from "react-native";

import styles from "./title.styles";
import mainStyle from "../styles";

interface Props {
  style?: StyleProp<TextStyle>;
  children: string | React.ReactNode;
  black?: boolean;
  center?: boolean;
  bold?:boolean;
  semibold?: boolean;
  footer?: boolean;
  link?: boolean;
  darkgrey?: boolean;
  white?:boolean;
}

export default function H1(props: Props): React.ReactElement {
	const customStyle = [styles.default, props.style];
	const {black, center,semibold,footer,link,darkgrey,bold,white}=props;

	if (black) {
		customStyle.push(mainStyle.black);
	}

	if(darkgrey) {
		customStyle.push(mainStyle.darkgrey);
	}

	if(white) {
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

	if(footer) {
		customStyle.push(mainStyle.primary);
	}
	if(link) {
		customStyle.push(mainStyle.link);
	}
	return <Text {...props} style={customStyle} />;
}

H1.displayName = "H3";
