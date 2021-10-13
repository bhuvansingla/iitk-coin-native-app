import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

const paddingHorizontal = 16;
const marginBottom = 10; 

export default StyleSheet.create({
	container: {
		marginTop: 1,
		width: "100%",
	},
	input: {
		marginTop: 2,
		marginBottom: marginBottom,
		paddingHorizontal: paddingHorizontal,
		paddingVertical: 10,
		borderRadius: 20,
		backgroundColor: COLORS.GREY,

		fontFamily: FONT.WEIGHT.REGULAR,
		color: COLORS.BLACK,
		fontSize: FONT.SIZE.PRIMARY,
		fontWeight: "600",

		shadowRadius: 4,
		shadowColor: COLORS.BLACK,
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 4 },

	},
	containerTitle: {
		marginBottom: 4,
		flexDirection: "row",
	},
	error: {
		paddingHorizontal: paddingHorizontal,
		top: -marginBottom, 
		opacity: 0.9,
	},
});
