import React, { useCallback, useMemo, useRef } from "react";
import { View, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { COLORS } from "styles";
import CustomBackdropGenerator from "./CustomBackdrop";

interface Props {
	shrinkedHeader: React.ReactNode;
	expandedHeader: React.ReactNode;
	children: React.ReactNode;
}

const MyBottomSheet: React.FC<Props> = ({
	shrinkedHeader,
	expandedHeader,
	children,
}) => {
	// ref
	const bottomSheetRef = useRef<BottomSheet>(null);

	// variables
	const snapPoints = useMemo(() => ["71%", "94%"], []);

	// custom backdrop
	const CustomBackdrop = CustomBackdropGenerator(shrinkedHeader);

	// callbacks
	const handleSheetChanges = useCallback((index: number) => {
		isNaN(index);
	}, []);

	// render
	return (
		<View style={styles.container}>
			{expandedHeader}
			<BottomSheet
				ref={bottomSheetRef}
				index={0}
				snapPoints={snapPoints}
				backdropComponent={CustomBackdrop}
				onChange={handleSheetChanges}
			>
				{children}
			</BottomSheet>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		margin: 0,
		padding: 0,
		backgroundColor: COLORS.MAIN_BG,
	},
});

export default MyBottomSheet;
