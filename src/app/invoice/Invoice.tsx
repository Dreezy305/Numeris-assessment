import { Button, Card, Flex, Space, Typography } from "antd";
import { MenuIcon } from "../../components/icons/icons";
import { invoice_actions, invoice_data } from "../../utils/data";
import { splitAmount } from "../../utils/helper";
import { IInvoice, IInvoiceActions } from "../../utils/types";

const Invoice = (): JSX.Element => {
  return (
    <Flex vertical gap={34} style={{ width: "100%" }} className="pb-8 mb-5">
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
            className="uppercase h-16 w-52 cursor-pointer bg-white border border-NumerisGreyBorder text-NumerisGrey font-NeueHaasDisplayMedium text-sm"
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
        {invoice_data.map((i: IInvoice, index: any) => {
          const { whole, decimal }: { whole: string; decimal: string } =
            splitAmount(i.amount);

          return (
            <Card
              title={null}
              className="card_radius py-4 px-4"
              key={i.amount + index}
            >
              <div className="flex flex-col space-y-4">
                <MenuIcon />
                <div className="flex flex-row items-center space-x-2">
                  <Typography.Text className="font-NeueHaasDisplayLight font-normal text-NumerisGrey text-xs uppercase tracking-widest">
                    {i?.title}
                  </Typography.Text>
                  <div
                    className={`rounded-3xl w-16 h-10 flex flex-row items-center justify-center ${i.color} font-NeueHaasDisplayMedium font-medium text-NumerisDarkGrey text-sm`}
                  >
                    {i?.fee}
                  </div>
                </div>
                <Typography.Text>
                  <Typography.Text className="font-NeueHaasDisplayMedium font-medium text-NumerisDark text-[28px] h-9">
                    {whole}
                  </Typography.Text>
                  <span className="font-NeueHaasDisplayMedium font-medium text-NumerisGrey h-4">
                    {decimal}
                  </span>
                </Typography.Text>
              </div>
            </Card>
          );
        })}
      </div>

      {/* INVOICE ACTIONS */}
      <Flex vertical gap={20} style={{ width: "100%" }} className="mt-6">
        <Typography.Text className="font-NeueHaasDisplayMedium font-medium text-NumerisDark text-xl">
          Invoice Actions
        </Typography.Text>

        <div className="grid grid-cols-3 gap-x-8">
          {invoice_actions.map((i: IInvoiceActions, index: any) => {
            return (
              <Card
                title={null}
                className={`card_radius py-4 px-3 ${i.bgColor}`}
                key={i.title + index}
              >
                <Flex vertical gap={16}>
                  {i.icon}
                  <Flex vertical gap={6}>
                    <Typography.Text
                      className={`font-medium font-NeueHaasDisplayMedium ${i.titleColor} text-[22px]`}
                    >
                      {i.title}
                    </Typography.Text>
                    <Typography.Text
                      className={`font-normal font-NeueHaasDisplayLight ${i.subTitleColor} text-sm`}
                    >
                      {i.subtitle}
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-row items-start space-x-8 mt-4">
          <Card
            title={
              <Flex className="pt-7" align="center" justify="space-between">
                <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xl text-NumerisDark">
                  Recent Invoices
                </Typography.Text>
                <Button
                  type="default"
                  shape="round"
                  size={"large"}
                  className="uppercase h-16 w-52 cursor-pointer bg-white border border-NumerisGreyBorder text-NumerisBlue font-NeueHaasDisplayMedium text-sm tracking-widest"
                >
                  VIEW ALL INVOICES
                </Button>
              </Flex>
            }
            className="w-3/5 invoice_activities px-3 pb-8"
          >
            <Flex vertical gap={38}>
              <Flex vertical gap={28}>
                <Typography.Text className="uppercase font-medium font-NeueHaasDisplayMedium text-NumerisDark text-xs tracking-wider">
                  today - 27th November, 2022
                </Typography.Text>

                <div className="ps-4 grid grid-cols-3 gap-x-4">
                  <Flex vertical gap={4}>
                    <Typography.Text>Invoice -</Typography.Text>
                    <Typography.Text>1023494 - 2304</Typography.Text>
                  </Flex>
                  <Flex vertical gap={4}>
                    <Typography.Text>Due date</Typography.Text>
                    <Typography.Text>May 19th, 2023</Typography.Text>
                  </Flex>
                  <Flex vertical gap={4}>
                    <Typography.Text> $1,311,750.12</Typography.Text>
                    <Typography.Text></Typography.Text>
                  </Flex>
                </div>

                <div className="ps-4 grid grid-cols-3 gap-x-4">
                  <Flex vertical gap={4}>
                    <Typography.Text>Invoice -</Typography.Text>
                    <Typography.Text>1023494 - 2304</Typography.Text>
                  </Flex>
                  <Flex vertical gap={4}>
                    <Typography.Text>Due date</Typography.Text>
                    <Typography.Text>May 19th, 2023</Typography.Text>
                  </Flex>
                  <Flex vertical gap={4}>
                    <Typography.Text> $1,311,750.12</Typography.Text>
                    <Typography.Text></Typography.Text>
                  </Flex>
                </div>
              </Flex>

              <Flex vertical gap={28}>
                <Typography.Text className="uppercase font-medium font-NeueHaasDisplayMedium text-NumerisDark text-xs tracking-wider">
                  8th december, 2022
                </Typography.Text>

                <div className="ps-4 grid grid-cols-3 gap-x-4">
                  <Flex vertical gap={4}>
                    <Typography.Text>Invoice -</Typography.Text>
                    <Typography.Text>1023494 - 2304</Typography.Text>
                  </Flex>
                  <Flex vertical gap={4}>
                    <Typography.Text>Due date</Typography.Text>
                    <Typography.Text>May 19th, 2023</Typography.Text>
                  </Flex>
                  <Flex vertical gap={4}>
                    <Typography.Text> $1,311,750.12</Typography.Text>
                    <Typography.Text></Typography.Text>
                  </Flex>
                </div>

                <div className="ps-4 grid grid-cols-3 gap-x-4">
                  <Flex vertical gap={4}>
                    <Typography.Text>Invoice -</Typography.Text>
                    <Typography.Text>1023494 - 2304</Typography.Text>
                  </Flex>
                  <Flex vertical gap={4}>
                    <Typography.Text>Due date</Typography.Text>
                    <Typography.Text>May 19th, 2023</Typography.Text>
                  </Flex>
                  <Flex vertical gap={4}>
                    <Typography.Text> $1,311,750.12</Typography.Text>
                    <Typography.Text></Typography.Text>
                  </Flex>
                </div>

                <div className="ps-4 grid grid-cols-3 gap-x-4">
                  <Flex vertical gap={4}>
                    <Typography.Text>Invoice -</Typography.Text>
                    <Typography.Text>1023494 - 2304</Typography.Text>
                  </Flex>
                  <Flex vertical gap={4}>
                    <Typography.Text>Due date</Typography.Text>
                    <Typography.Text>May 19th, 2023</Typography.Text>
                  </Flex>
                  <Flex vertical gap={4}>
                    <Typography.Text> $1,311,750.12</Typography.Text>
                    <Typography.Text></Typography.Text>
                  </Flex>
                </div>
              </Flex>
            </Flex>
          </Card>

          <Card
            title={
              <Flex className="pt-7" align="center" justify="space-between">
                <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xl text-NumerisDark">
                  Recent Activities
                </Typography.Text>
                <Button
                  type="default"
                  shape="round"
                  size={"large"}
                  className="uppercase h-16 cursor-pointer bg-white border border-NumerisGreyBorder text-NumerisBlue font-NeueHaasDisplayMedium text-sm tracking-widest"
                >
                  VIEW ALL
                </Button>
              </Flex>
            }
            className="w-2/5 invoice_activities px-3 pb-8"
          ></Card>
        </div>
      </Flex>
    </Flex>
  );
};

export default Invoice;
