import React from "react";
import { theme } from "@project/ui-kit";

export default function Index() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div
      style={{
        padding: 24,
        minHeight: 360,
        background: colorBgContainer,
      }}
    >
      content
    </div>
  );
}
