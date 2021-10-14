import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

export default StyleSheet.create({
	container: {
		marginBottom: 17,
		marginTop: 20,
		width: "100%",
	},

	text: {
		color: COLORS.BLACK,
		flexDirection: "row",
		fontSize: FONT.SIZE.H2,
		marginBottom: 7,
		opacity: 1,
		textAlign: "left",
	},

});
