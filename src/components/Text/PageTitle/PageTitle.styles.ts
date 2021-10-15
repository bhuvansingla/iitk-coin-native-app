import { StyleSheet } from "react-native";

import { FONT } from "styles";

const fontSize = FONT.SIZE.H2;
const fontAwesomeSize = fontSize * 1.3;

const styles = StyleSheet.create({
	header: {
		alignItems: "flex-start",
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		marginBottom: 10,
		marginTop: 20,
		maxHeight: 50,
	},
	heading: {
		alignItems: "flex-start",
		flex: 1,
		fontSize,
		justifyContent: "flex-start",
		maxHeight: 50,
		opacity: 1,
		width: 50,
	},
	icon: {
		fontSize: fontAwesomeSize,
	},
});

export default styles;
