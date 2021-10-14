import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

export default StyleSheet.create({

	container: {
		marginTop: 1,
		width: "100%",
	},

	containerTitle: {
		flexDirection: "row",
		marginBottom: 4,
	},

	input: {
		backgroundColor: COLORS.GREY,
		borderRadius: 20,
		color: COLORS.BLACK,
		fontFamily: FONT.WEIGHT.REGULAR,
		fontSize: FONT.SIZE.PRIMARY,
		fontWeight: "600",

		marginBottom: 10,
		marginTop: 2,
		paddingHorizontal: 16,
		paddingVertical: 10,

		shadowColor: COLORS.BLACK,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.25,
		shadowRadius: 4,

	},

});
