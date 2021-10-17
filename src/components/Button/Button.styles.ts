import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

export default StyleSheet.create({
	container: {
		alignItems: "center",

		backgroundColor: COLORS.TEAL,
		borderRadius: 20,
		elevation: 5,
		marginTop: 15,
		paddingVertical: 10,
		shadowColor: COLORS.BLACK,
		shadowOffset: { width: 0, height: 4 },

		shadowOpacity: 0.5,
		shadowRadius: 17,

		width: "100%",
	},

	rippleDisabled: {
		opacity: 0.65,
	},

	rippleEnabled: {
		opacity: 1,
	},

	text: {
		flexDirection: "row",
		fontSize: FONT.SIZE.PRIMARY,
		opacity: 1,
	},

});
