import { StyleSheet } from "react-native";

import { FONT } from "styles";

const fontSize = FONT.SIZE.H2;
const fontAwesomeSize = fontSize * 1.3;

const styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		marginTop: 20,
		marginBottom: 10,
		maxHeight: 50,
	},
	heading: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		maxHeight: 50,
		opacity: 1,
		width: 50,
		fontSize,
	},
	icon: {
		fontSize: fontAwesomeSize,
	},
});

export default styles;
