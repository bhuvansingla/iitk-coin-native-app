import React from "react";
import { StyleProp, ImageStyle } from "react-native";

import source from "./image.source";
import Style from "./image.styles";


const Height = Style.Height;
const styles = Style.styles;

interface Prop {
  name: "icon" | "COIN" | "crow";
  size?: string;
  style?: StyleProp<ImageStyle>;
}

const SImage: React.FC<Prop> = (props) => {
	const { name, size, style } = props;
	// SVG Tag
	let SVG = source.Crow;

	const Size = size || "100%";

	
	if (name === "crow") {
		return <SVG height={Size} style={[styles.default, styles.crow, style]} />;
	}

	if (name === "COIN") {	
		SVG = source.COIN;
		return <SVG height={Size} style={[styles.default, styles.coin, style]} />;
	} else {	
		SVG = source.Icon;
		return <SVG height={Size} style={[styles.default, styles.icon, style]} />;
	}
};

export default SImage;
