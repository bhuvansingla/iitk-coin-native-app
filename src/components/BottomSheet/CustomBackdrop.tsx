import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";

import { COLORS } from "styles";

interface BackdropType {
	(prop: BottomSheetBackdropProps): JSX.Element;
}

function CustomBackdropGenerator(ShinkedHeader: React.ReactNode): BackdropType {

	const useCustomBackdrop: BackdropType = ({ animatedIndex, style }: BottomSheetBackdropProps): JSX.Element => {
		// animated variables
		const containerAnimatedStyle = useAnimatedStyle(() => ({
			opacity: interpolate(
				animatedIndex.value,
				[0, 1],
				[0, 1],
				Extrapolate.CLAMP
			),
		}));

		// styles
		const containerStyle = useMemo(
			() => [
				style,
				{
					backgroundColor: COLORS.MAIN_BG,
				},
				containerAnimatedStyle,
			],
			[style, containerAnimatedStyle]
		);

		return (
			<Animated.View style={containerStyle}>{ShinkedHeader}</Animated.View>
		);
	};
	return useCustomBackdrop;
}	
		
export default CustomBackdropGenerator;
