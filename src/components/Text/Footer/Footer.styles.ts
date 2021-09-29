import { StyleSheet } from "react-native";
import { Font } from "styles";

export default StyleSheet.create({
	container: {
		marginTop: 20,
		marginBottom: 20,
		marginHorizontal: 16,  
	},

	text: {
		marginBottom: 7,
		flexDirection: "row",
		opacity:1,
	},

	link: {
		flexDirection: "row",
		fontSize:Font.FontSize.Primary,
		opacity:1,      
	},

	fullWidth: {
		width: "100%",
		alignItems: "center",
		paddingHorizontal: 0,
	},
});
