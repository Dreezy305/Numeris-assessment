import { Button, Flex, Space, Typography } from "antd";

const Invoice = (): JSX.Element => {
  return (
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
      <Space direction="horizontal" size={"small"}>
        <Button type="default" shape="round" size={"large"} className="uppercase h-16 w-52 cursor-pointer">
          see what’s new
        </Button>
        <Button type="primary" shape="round" size={"large"} className="uppercase h-16 w-52 cursor-pointer">
          CREATE
        </Button>
      </Space>
    </Flex>
  );
};

export default Invoice;
