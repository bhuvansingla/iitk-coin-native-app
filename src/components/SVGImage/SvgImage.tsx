import React from "react";
import { StyleProp, ImageStyle, View } from "react-native";

import source from "./image.source";
import styles from "./image.styles";

interface Prop {
  name: "CoinLogo" | "CoinTypographyLogo" | "Crow";
  size?: string;
  style?: StyleProp<ImageStyle>;
}

const SImage: React.FC<Prop> = (props) => {
	const { name, size, style } = props;
	// SVG Tag
	let SVG = source.Crow;

	const height = size || "100%";

	
	if (name === "Crow") {
		return <SVG height={height} style={[styles.default, styles.crow, style]} />;
	}

	if (name === "CoinTypographyLogo") {	
		SVG = source.CoinTypographyLogo;
		return (
      <SVG
        height={height}
        style={[styles.default, styles.coinTypographyLogo, style]}
      />
    );
	} if(name === "CoinLogo") {	
		SVG = source.CoinLogo;
		return <SVG height={height} style={[styles.default, styles.coinLogo, style]} />;
	} else {
		return <View/>;
	}
};

export default SImage;
