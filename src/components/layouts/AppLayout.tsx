import { Avatar, Flex, Layout, Menu, Typography } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import useResize from "../../hooks/resize.hooks";
import { Items } from "../../utils/menuitems";
import { ArrowDownIcon, BellIcon } from "../icons/icons";

const { Header, Content, Sider } = Layout;

const AppLayout: React.FC = () => {
  const { size } = useResize();

  const headerStyle: React.CSSProperties = {
    width: "100%",
    borderBottom: "1px solid #A1B8FF33",
  };

  return (
    <Layout style={{ height: "100vh", overflowY: "scroll" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
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
          className="border_end"
        />
      </Sider>
      <Layout
        style={{ marginLeft: size[0] >= 1024 ? 270 : 0 }}
        className="py-5"
      >
        <Header style={{ background: "#F5F6FA" }} className="px-12 py-0">
          <Flex
            align="center"
            justify="space-between"
            style={{ ...headerStyle }}
            className="pb-3 flex-bottom"
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
        </Header>
        <Content style={{ margin: "24px 16px 0" }} className="px-8">
          <div
            className="pb-b mb-5 overflow-y-scroll"
            style={{ background: "#F5F6FA" }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
