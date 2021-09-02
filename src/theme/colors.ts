import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#d1495b",
  primaryBright: "#80ed99",
  primaryDark: "#2d6a4f",
  secondary: "#d1495b",
  success: "#9B9694",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#40916c",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#e6fbff",
  backgroundDisabled: "#d2f4fa",
  contrast: "#d2f4fa",
  invertedContrast: "#eef9fa",
  input: "#80ceed",
  tertiary: "#EFF4F5",
  text: "#04210a",
  textDisabled: "#a4a9ab",
  textSubtle: "#1b2443",
  borderColor: "#5778cc",
  card: "#dbf7ff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#fc8898",
  background: "#08091c",
  backgroundDisabled: "#E9EAEB",
  contrast: "#5275b7",
  invertedContrast: "#191326",
  input: "#405891",
  primaryDark: "#F2DA91",
  tertiary: "#2f3d75",
  text: "#74c8db",   // possibly change
  textDisabled: "#898d8f",
  textSubtle: "#d8f3f3",
  borderColor: "#524B63",
  card: "#1b2443",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
