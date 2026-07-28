import type { ThemeConfig } from "antd";

/**
 * Single source of truth for antd styling. Keep visual decisions here
 * instead of overriding `.ant-*` classes — antd v6 emits its CSS with
 * `:where()` selectors that Tailwind utilities cannot reliably beat.
 */
export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#4f46e5",
    colorInfo: "#4f46e5",
    colorSuccess: "#10b981",
    colorWarning: "#f59e0b",
    colorError: "#ef4444",
    colorTextBase: "#0f172a",
    colorBorder: "#e2e8f0",
    colorBorderSecondary: "#eef2f7",
    borderRadius: 12,
    fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
    fontSize: 15,
    lineHeight: 1.65,
    controlHeight: 40,
    boxShadowSecondary:
      "0 2px 4px rgb(15 23 42 / 0.04), 0 24px 48px -16px rgb(15 23 42 / 0.18)",
  },
  components: {
    Button: {
      controlHeightLG: 48,
      paddingInlineLG: 26,
      borderRadiusLG: 12,
      primaryShadow: "0 10px 24px -10px rgb(79 70 229 / 0.65)",
      defaultShadow: "none",
    },
    Card: {
      borderRadiusLG: 18,
      paddingLG: 28,
    },
    Collapse: {
      headerPadding: "20px 4px",
      contentPadding: "0 4px 20px",
      borderRadiusLG: 0,
    },
    Segmented: {
      itemSelectedBg: "#ffffff",
      trackBg: "#eef2ff",
      borderRadius: 999,
      borderRadiusSM: 999,
    },
    Tag: {
      borderRadiusSM: 999,
    },
    Input: {
      controlHeightLG: 48,
    },
  },
};
