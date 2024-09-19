import {  Button, Card, Flex, Space, Typography } from "antd";
import { OverviewIcon } from "../../components/icons/icons";

const Invoice = (): JSX.Element => {
  return (
    <Flex vertical gap={34} style={{ width: "100%" }}>
      <Flex
        gap={6}
        style={{ width: "100%" }}
        className="mt-5"
        justify="space-between"
        align="center"
      >
        <Typography.Text className="font-NeueHaasDisplayMedium font-medium text-NumerisDark text-3xl">
          Invoice
        </Typography.Text>
        <Space direction="horizontal" size={"middle"}>
          <Button
            type="default"
            shape="round"
            size={"large"}
            className="uppercase h-16 w-52 cursor-pointer bg-white border-none text-NumerisGrey font-NeueHaasDisplayMedium text-sm"
          >
            see what’s new
          </Button>
          <Button
            type="primary"
            shape="round"
            size={"large"}
            className="uppercase h-16 w-52 cursor-pointer bg-NumerisBlue font-NeueHaasDisplayMedium text-sm text-white"
          >
            CREATE
          </Button>
        </Space>
      </Flex>

      <div className="grid grid-cols-4 gap-x-8">
        <Card title={null} className="card_radius">
          <OverviewIcon />
          <div className="">
            <Typography.Text className="font-NeueHaasDisplayMedium font-medium text-NumerisDark text-xl">
              total paid
            </Typography.Text>
            <div></div>
          </div>
          <p>Card content</p>
        </Card>
        <Card title={null} className="card_radius">
          <OverviewIcon />
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title={null} className="card_radius">
          <OverviewIcon />
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title={null} className="card_radius">
          <OverviewIcon />
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </Flex>
  );
};

export default Invoice;
