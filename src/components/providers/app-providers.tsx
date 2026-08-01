"use client";

import { antdTheme } from "@/lib/antd-theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import type { ReactNode } from "react";

/**
 * antd's `<App>` wrapper is deliberately absent: nothing here uses message,
 * notification or Modal, and it drags those into every page's first load.
 * Add it back the day a component needs `App.useApp()`.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
}
