import { StyleSheet } from "react-native";

import { Colors,Font } from "styles";

export default StyleSheet.create({
	container: {
		borderRadius:20,

		shadowRadius:5,
		shadowColor:Colors.Black,
		shadowOpacity:0.25,
		shadowOffset:{width:0, height:4},
		elevation:10,
		backgroundColor: Colors.Teal,
		paddingVertical: 12,

		width: "100%",
		alignItems: "center",
		
		marginTop:5,
		marginBottom:15,
	},

	text: {
		flexDirection: "row",
		opacity:1,
		fontSize:Font.FontSize.H3,
	},
	
});
