import { StyleSheet } from "react-native";

import { Layout } from "constant";
import { Font } from "styles";

export default StyleSheet.create({
	container: {
		marginTop: 20,
		marginBottom: 20,
		marginHorizontal: Layout.PADDING_HORIZONTAL,  
	},

	boldtitle: {
		fontWeight:"bold", 
		flexDirection: "row",
		fontSize:Font.FontSize.Primary,
		opacity:1,      
	},

	text: {
		marginBottom: 7,
		flexDirection: "row",
		opacity:1,
	},

	fullWidth: {
		width: "100%",
		alignItems: "center",
		paddingHorizontal: 0,
	},
});
