import { Flex, Space, Typography } from "antd";

const Invoice = (): JSX.Element => {
  return (
    <Flex gap={6} style={{ width: "100%" }} className="mt-5">
      <Typography.Text className="">Invoice</Typography.Text>
      <Space direction="horizontal" size={"small"}>

      </Space>
    </Flex>
  );
};

export default Invoice;
