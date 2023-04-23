import React, { PropsWithChildren } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SoundOutlined,
} from "@project/ui-kit/icons";
import { Layout, Menu, Badge, Button, theme } from "@project/ui-kit";
import { connectContext } from "context-base-api";
import { AppStore } from "../../model/app/store";
const { Header, Content, Footer, Sider } = Layout;

const LayoutWrapper = connectContext(
  [AppStore.Context],
  ([
    {
      state: { notifications },
    },
  ]) => ({ notifications })
)<PropsWithChildren>(({ children, notifications }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div
            style={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "end",
              paddingRight: "24px",
            }}
          >
            {!!notifications.length && (
              <Badge count={notifications.length}>
                <Button icon={<SoundOutlined />} />
              </Badge>
            )}
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
});

export default LayoutWrapper;
