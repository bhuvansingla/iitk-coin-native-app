import { StyleSheet } from "react-native";
import { COLORS, FONT } from "styles";

export default StyleSheet.create({

	container: {
		marginTop: 5,
		marginHorizontal: 16,
		width: "100%",
	},

	input: {
		marginTop: 2,
		marginBottom: 20,
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderRadius: 20,
		backgroundColor: COLORS.GREY,

		fontFamily: FONT.WEIGHT.BOLD,
		color: COLORS.BLACK,
		fontSize: FONT.SIZE.H3,
		fontWeight: "600",

		shadowRadius: 4,
		shadowColor: COLORS.BLACK,
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 4 },

	},

	containerTitle: {
		marginBottom: 7,
		flexDirection: "row",
	},

	fullWidth: {
		width: "100%",
		alignItems: "center",
		paddingHorizontal: 0,
	},
});
