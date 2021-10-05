import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

export default StyleSheet.create({
	container: {
		borderRadius: 20,

		shadowRadius: 17,
		shadowColor: COLORS.BLACK,
		shadowOpacity: 0.5,
		shadowOffset: { width: 0, height: 4 },
		elevation: 5,
		backgroundColor: COLORS.TEAL,
		paddingVertical: 10,

		width: "100%",
		alignItems: "center",

		marginTop: 15,
	},

	text: {
		flexDirection: "row",
		opacity: 1,
		fontSize: FONT.SIZE.PRIMARY,
	},

});
