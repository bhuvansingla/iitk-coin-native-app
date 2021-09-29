import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";

import { Colors } from "styles";

interface BackdropType {
	(prop: BottomSheetBackdropProps): JSX.Element;
}

interface GeneratorType {
	(type: React.ReactNode): BackdropType;
}

const CustomBackdropGenerator: GeneratorType =
	(
		ShinkedHeader: React.ReactNode
	): BackdropType => // eslint-disable-next-line react/display-name
		({ animatedIndex, style }: BottomSheetBackdropProps): JSX.Element => {
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
						backgroundColor: Colors.mainbg,
					},
					containerAnimatedStyle,
				],
				[style, containerAnimatedStyle]
			);

			return (
				<Animated.View style={containerStyle}>{ShinkedHeader}</Animated.View>
			);
		};


/* SAMPLE
  let head = (
  <View style={{ flex: 1, alignItems: "center", padding: "10%" }}>
    <IMAGE name="coin" size={0.07} />
  </View>
  );

  const abc = CustomBackdropGenerator(head);
*/

export default CustomBackdropGenerator;
