import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

const paddingHorizontal = 16;
const marginBottom = 10;

export default StyleSheet.create({
	amountInputContainer: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
	},

	container: {
		marginTop: 1,
		width: "100%",
	},

	containerTitle: {
		flexDirection: "row",
		marginBottom: 4,
	},

	error: {
		opacity: 0.9,
		paddingHorizontal: paddingHorizontal,
		top: -marginBottom,
	},
	
	errorImageStyle: {
		height: "32%",
		marginLeft: "-28%",
		marginTop: "-1%",
		width: "40%",
	},

	imageStyle: {
		height: "40%",
		marginLeft: "-28%",
		marginTop: "6%",
		width: "40%",
	},

	input: {
		backgroundColor: COLORS.GREY,
		borderRadius: 20,
		color: COLORS.BLACK,
		fontFamily: FONT.WEIGHT.REGULAR,
		fontSize: FONT.SIZE.PRIMARY,
		fontWeight: "600",

		marginBottom,
		marginTop: 2,
		paddingHorizontal,
		paddingVertical: 10,

		shadowColor: COLORS.BLACK,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
	},
});
