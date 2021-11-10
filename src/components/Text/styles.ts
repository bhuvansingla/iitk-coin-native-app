import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

export default StyleSheet.create({
	Bold: {
		fontFamily: FONT.WEIGHT.BOLD,
	},
	H2: {
		fontSize: FONT.SIZE.H2,
	},
	Head: {
		fontFamily: FONT.WEIGHT.HEAD,
	},
	Regular: {
		fontFamily: FONT.WEIGHT.REGULAR,
	},
	SemiBold: {
		fontFamily: FONT.WEIGHT.SEMI_BOLD,
	},
	black: {
		color: COLORS.BLACK,
	},
	center: {
		textAlign: "center",
	},
	darkgrey: {
		color: COLORS.DARK_GREY,
	},
	green: {
		color: COLORS.GREEN,
	},
	grey: {
		color: COLORS.GREY,
	},
	left: {
		textAlign: "left",
	},
	link: {
		color: COLORS.LINK,
	},
	primary: {
		fontSize: FONT.SIZE.PRIMARY,
	},
	red: {
		color: COLORS.RED,
	},
	secondary: {
		fontSize: FONT.SIZE.SECONDARY,
	},
	small: {
		fontSize: FONT.SIZE.FOOTER,
	},
	teal: {
		color: COLORS.TEAL,
	},
	white: {
		color: COLORS.WHITE,
		opacity: 1,
	},
	yellow: {
		color: COLORS.YELLOW,
	},
});
