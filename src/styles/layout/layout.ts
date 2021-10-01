import { Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const SPACING = {
	SIMPLE: 8,
	DOUBLE: 16,
	TRIPLE: 24,
};

const IS_SMALL_DEVICE = WIDTH < 375;

const SCREEN = {
	WIDTH,
	HEIGHT,
};


export const LAYOUT = { SCREEN, IS_SMALL_DEVICE, SPACING };
