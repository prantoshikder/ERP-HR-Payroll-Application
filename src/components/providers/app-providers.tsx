"use client";

import type { ReactNode } from "react";
import { App as AntApp, ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { antdTheme } from "@/lib/antd-theme";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme}>
        <AntApp>{children}</AntApp>
      </ConfigProvider>
    </AntdRegistry>
  );
}
