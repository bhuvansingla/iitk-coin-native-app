import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

export default StyleSheet.create({
	teal: {
		color: COLORS.TEAL,
	},
	grey: {
		color: COLORS.GREY,
	},
	link: {
		color: COLORS.LINK,
	},
	white: {
		color: COLORS.WHITE,
		opacity: 1,
	},
	black: {
		color: COLORS.BLACK,
	},
	darkgrey: {
		color: COLORS.DARK_GREY,
	},
	red: {
		color: COLORS.RED,
	},
	green: {
		color: COLORS.GREEN,
	},
	yellow: {
		color: COLORS.YELLOW,
	},
	Head: {
		fontFamily: FONT.WEIGHT.HEAD,
	},
	Bold: {
		fontFamily: FONT.WEIGHT.BOLD,
	},
	SemiBold: {
		fontFamily: FONT.WEIGHT.SEMI_BOLD,
	},
	Regular: {
		fontFamily: FONT.WEIGHT.REGULAR,
	},
	center: {
		textAlign: "center",
	},
	left: {
		textAlign: "left",
	},
	primary: {
		fontSize: FONT.SIZE.PRIMARY,
	},
	secondary: {
		fontSize: FONT.SIZE.SECONDARY,
	},
	H2: {
		fontSize: FONT.SIZE.H2,
	},
});
