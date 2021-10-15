import { StyleSheet } from "react-native";

import { COLORS } from "styles";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		height: "100%",
		
		justifyContent: "flex-start",
		paddingHorizontal: 20,
		position: "relative",
		zIndex: 2,
	},
	content: {
		zIndex: -1,
	},
	detailsContainer: {
		backgroundColor: COLORS.DARK_TEAL,
		borderRadius: 20,

		elevation: 4,
		margin: 0,

		overflow: "hidden",
		paddingBottom: 5,
		paddingLeft: 40,
		paddingRight: 20,
		paddingTop: 40,

		shadowColor: COLORS.BLACK,
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 20,
		top: -40,

		width: "100%",
		zIndex: -1,
	},
	left: {
		alignItems: "center",
		justifyContent: "center",
		zIndex: 1,
	},
	mainContainer: {
		flex: 0,
		paddingVertical: 5,
		width: "100%",
	},
	right: {
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
	},
	ripple: {
		alignItems: "center",
		backgroundColor: COLORS.WHITE,
		borderRadius: 20,

		elevation: 4,
		flex: 1,
		flexDirection: "column",
		marginBottom: 0,

		marginTop: 7,
		maxHeight: 185,
		minHeight: 100,
		paddingVertical: 20,
		shadowColor: COLORS.BLACK,

		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 20,
		width: "100%",
	},
	rippleWrapper: {
		maxHeight: 200,
		minHeight: 115,
		width: "100%",
	},
	text: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
		opacity: 1,
	},
});
export default styles;
