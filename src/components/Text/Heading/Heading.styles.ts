import { StyleSheet } from "react-native";

import { COLORS, FONT } from "styles";

export default StyleSheet.create({
	container: {
		marginBottom: 17,
		marginTop: 20,
		width: "100%",
	},
	shimmer : {
		borderRadius: 20,
		marginBottom: 17,
		marginTop: 20,
		minHeight: 40,
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
	wrapper: {
		minHeight: 75,
		width: "100%",
	}
});
