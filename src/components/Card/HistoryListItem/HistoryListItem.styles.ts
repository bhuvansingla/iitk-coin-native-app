import { StyleSheet } from "react-native";

import { COLORS } from "styles";

const styles = StyleSheet.create({
	mainContainer: {
		flex: 0,
		paddingVertical: 5,
		width: "100%",
	},
	content: {
		zIndex: -1,
	},
	rippleWrapper: {
		minHeight: 115,
		maxHeight: 200,
		width: "100%",
	},
	ripple: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",

		marginTop: 7,
		marginBottom: 0,
		paddingVertical: 20,
		borderRadius: 20,

		shadowRadius: 20,
		shadowColor: COLORS.BLACK,
		shadowOpacity: 0.5,
		shadowOffset: { width: 0, height: 4 },
		elevation: 4,

		backgroundColor: COLORS.WHITE,
		minHeight: 100,
		maxHeight: 185,
		width: "100%",
	},
	detailsContainer: {
		zIndex: -1,
		overflow: "hidden",

		borderRadius: 20,
		margin: 0,

		paddingTop: 40,
		paddingBottom: 5,
		paddingLeft: 40,
		paddingRight: 20,
		top: -40,

		shadowRadius: 20,
		shadowColor: COLORS.BLACK,
		shadowOpacity: 0.5,
		shadowOffset: { width: 0, height: 4 },
		elevation: 4,

		backgroundColor: COLORS.DARK_TEAL,
		width: "100%",
	},
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		
		zIndex: 2,
		position: "relative",
		paddingHorizontal: 20,
		height: "100%",
	},
	left: {
		zIndex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	right: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	text: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		opacity: 1,
	},
});
export default styles;
