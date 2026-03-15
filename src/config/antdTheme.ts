import type { ThemeConfig } from "antd";

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#6b66de",
    colorSuccess: "#22c55e",
    colorError: "#ef4444",
    colorWarning: "#f59e0b",
    colorInfo: "#06b6d4",
    colorTextBase: "#141414",
    colorBgBase: "#ffffff",
    colorBorder: "#e5e7eb",
    colorBorderSecondary: "#edf0ff",
    fontFamily: '"Sora", sans-serif',
    borderRadius: 8,
    controlHeight: 40,
  },
  components: {
    Button: {
      fontFamily: '"Sora", sans-serif',
      primaryShadow: "none",
      defaultBorderColor: "#e5e7eb",
      borderRadius: 8,
      controlHeight: 40,
    },
    Input: {
      fontFamily: '"Sora", sans-serif',
      activeBorderColor: "#6b66de",
      hoverBorderColor: "#6b66de",
      borderRadius: 8,
      controlHeight: 40,
    },
    DatePicker: {
      fontFamily: '"Sora", sans-serif',
      activeBorderColor: "#6b66de",
      hoverBorderColor: "#6b66de",
      borderRadius: 8,
      controlHeight: 40,
    },
    Select: {
      fontFamily: '"Sora", sans-serif',
      optionActiveBg: "#ebebfb",
      optionSelectedBg: "#ebebfb",
      optionSelectedColor: "#6b66de",
      borderRadius: 8,
      controlHeight: 40,
    },
    Dropdown: {
      fontFamily: '"Sora", sans-serif',
      borderRadiusLG: 8,
    },
    Switch: {
      colorPrimary: "#6b66de",
      colorPrimaryHover: "#5b56ce",
    },
    Checkbox: {
      colorPrimary: "#6b66de",
      colorPrimaryHover: "#5b56ce",
      borderRadiusSM: 4,
    },
  },
};

export default antdTheme;
