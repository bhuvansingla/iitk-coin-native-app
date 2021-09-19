import { Layout } from "constant";

const FontWeight = {
  Head: "MerriweatherSans-ExtraBold",
  Bold: "OpenSans-Bold",
  SemiBold: "OpenSans-SemiBold",
  Regular: "OpenSans-Regular",
};

const FontSizeNormalDevice = {
  Header: 20,
  H1: 28,
  H2: 26,
  H3: 22,
  Primary: 18,
  Secondary: 16,
  Tertiary: 14,
};

const FontSizeSmallDevice = {
  Header: 18,
  H1: 22,
  H2: 20,
  H3: 18,
  Primary: 16,
  Secondary: 14,
  Tertiary: 12,
};

const FontSize = Layout.isSmallDevice ? FontSizeSmallDevice : FontSizeNormalDevice;

const Font = { FontWeight, FontSize };

export { Font };
