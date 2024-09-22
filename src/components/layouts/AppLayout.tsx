import { MenuOutlined } from "@ant-design/icons";
import { Avatar, Button, Drawer, Flex, Layout, Menu, Typography } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useResize from "../../hooks/resize.hooks";
import { Items } from "../../utils/menuitems";
import { ArrowDownIcon, BellIcon } from "../icons/icons";

const { Header, Content, Sider } = Layout;

const AppLayout: React.FC = () => {
  const { size } = useResize();
  const [open, setOpen] = useState(false);

  const headerStyle: React.CSSProperties = {
    width: "100%",
    borderBottom: "1px solid #A1B8FF33",
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout style={{ height: "100vh", overflowY: "scroll" }}>
      <Drawer onClose={onClose} open={open} placement="right">
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={Items}
          className="custom-menu"
        />
      </Drawer>
      {size[0] >= 1024 && (
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            return broken;
          }}
          onCollapse={(collapsed, type) => {
            return { collapsed, type };
          }}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            background: "#fff",
          }}
          className="side_bar"
        >
          <div className="demo-logo-vertical px-8 py-8" style={{ height: 100 }}>
            <div
              className="border-l-4 border-l-NumerisBlue"
              style={{ height: 23 }}
            />
          </div>

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={Items}
            className="custom-menu"
          />
        </Sider>
      )}
      <Layout
        style={{ marginLeft: size[0] >= 1024 ? 270 : 0 }}
        className="py-5"
      >
        <Header
          style={{ background: "#F5F6FA" }}
          className={`${size[0] < 1024 ? "px-4 py-0" : "px-12 py-0"} `}
        >
          {size[0] < 1024 && (
            <Flex align="center" justify="space-between">
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={showDrawer}
                size="small"
                className="cursor-pointer"
              />
              <Typography.Text className="text-NumerisDarkGrey font-NeueHaasDisplayMedium text-base tracking-widest">
                INVOICE
              </Typography.Text>
              <div className="bg-white w-14 h-10 rounded-[40px] flex flex-row items-center justify-center space-x-3">
                <Avatar className="bg-NumerisBlue" style={{}}>
                  KO
                </Avatar>
                <ArrowDownIcon />
              </div>
            </Flex>
          )}
          {size[0] >= 1024 && (
            <Flex
              align="center"
              justify="space-between"
              style={{ ...headerStyle }}
              className="pb-5 flex-bottom"
            >
              <Typography.Text className="text-NumerisDarkGrey font-NeueHaasDisplayMedium text-2xl tracking-widest">
                INVOICE
              </Typography.Text>

              <div className="flex flex-row space-x-4">
                <div className="bg-white w-16 h-16 rounded-[40px] flex flex-row items-center justify-center">
                  <BellIcon />
                </div>
                <div className="bg-white w-20 h-16 rounded-[40px] flex flex-row items-center justify-center space-x-3">
                  <Avatar className="bg-NumerisBlue" style={{}}>
                    KO
                  </Avatar>
                  <ArrowDownIcon />
                </div>
              </div>
            </Flex>
          )}
        </Header>
        <Content
          style={{ margin: "24px 16px 0" }}
          className="px-2 md:px-3 xl:px-8"
        >
          <div>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
