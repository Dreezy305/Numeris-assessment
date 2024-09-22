import {
  Avatar,
  Button,
  Card,
  Dropdown,
  Flex,
  MenuProps,
  Space,
  Typography,
} from "antd";
import AvatarIcon from "../../assets/image13.png";
import { MenuIcon } from "../../components/icons/icons";
import InvoiceDetails from "../../components/modals/InvoiceDetails";
import { useModal } from "../../contexts/ModalContext";
import { invoice_actions, invoice_data } from "../../utils/data";
import { splitAmount } from "../../utils/helper";
import { IInvoice, IInvoiceActions } from "../../utils/types";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Typography.Text className="font-medium font-NeueHaasDisplayMedium uppercase text-sm text-NumerisGrey tracking-widest py-8 mb-8">
        Duplicate invoice
      </Typography.Text>
    ),
  },
  {
    key: "2",
    label: (
      <Typography.Text className="font-medium font-NeueHaasDisplayMedium uppercase text-sm text-NumerisGrey tracking-widest py-8">
        get sharable link
      </Typography.Text>
    ),
  },
];

const Invoice = (): JSX.Element => {
  const { openModal } = useModal();
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
          {/* LEFT */}
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
                  onClick={() =>
                    openModal(
                      <InvoiceDetails />,
                      <Flex
                        align="flex-start"
                        justify="space-between"
                        className="h-28 pb-8"
                      >
                        <Flex vertical gap={20} className="place-content-start">
                          <div className="flex flex-col space-y-1">
                            <Typography.Text className="font-bold font-NeueHaasDisplayBold text-NumerisDark text-3xl">
                              Invoice - 1023494 - 2304
                            </Typography.Text>
                            <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisGrey">
                              View the details and activity of this invoice
                            </Typography.Text>
                          </div>
                          <Typography.Text className="bg-NumerisPryBg border border- NumerisPryBorder text-NumerisBlue font-NeueHaasDisplayMedium font-medium text-xs uppercase h-9 flex flex-row items-center justify-center rounded-2xl text-right float-end tracking-widest place-self-start px-8 whitespace-nowrap">
                            PARTIAL PAYMENT
                          </Typography.Text>
                        </Flex>
                        <Flex gap={12} className="py-3 pb-8 place-self-start">
                          <Button
                            type="default"
                            shape="round"
                            size={"large"}
                            className="uppercase h-16 w-52 cursor-pointer bg-white border border-NumerisGreyBorder text-NumerisBlue font-NeueHaasDisplayMedium text-sm tracking-widest"
                          >
                            Download as pdf
                          </Button>
                          <Button
                            type="primary"
                            shape="round"
                            size={"large"}
                            className="uppercase h-16 w-52 cursor-pointer bg-NumerisBlue font-NeueHaasDisplayMedium text-sm text-white"
                          >
                            Send invoice
                          </Button>
                          <Dropdown
                            menu={{ items }}
                            placement="bottomRight"
                            trigger={["click", "hover"]}
                            overlayStyle={{
                              width: "260px",
                              borderRadius: "24px !important",
                              padding: 16,
                            }}
                            overlayClassName="custom-dropdown"
                          >
                            <Button
                              type="default"
                              shape="round"
                              size={"large"}
                              className="uppercase h-16 cursor-pointer bg-white border border-NumerisGreyBorder text-NumerisGrey font-NeueHaasDisplayMedium text-sm"
                            >
                              More
                            </Button>
                          </Dropdown>
                        </Flex>
                      </Flex>,
                      1334,
                      false
                    )
                  }
                >
                  VIEW ALL INVOICES
                </Button>
              </Flex>
            }
            className="w-3/5 invoice_activities px-3 pb-8"
          >
            <Flex vertical gap={38}>
              <Flex vertical gap={34} style={{ width: "100%" }}>
                <Typography.Text className="uppercase font-medium font-NeueHaasDisplayMedium text-NumerisDark text-xs tracking-wider">
                  today - 27th November, 2022
                </Typography.Text>

                <Flex vertical gap={38}>
                  <div className="grid grid-cols-3 gap-x-4 w-[85%] mr-auto ml-auto">
                    <Flex vertical gap={4} style={{ width: "80%" }}>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-sm text-NumerisDarkGrey">
                        Invoice -
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-sm text-NumerisDarkGrey">
                        1023494 - 2304
                      </Typography.Text>
                    </Flex>
                    <Flex vertical gap={4}>
                      <Typography.Text className="uppercase text-xs font-normal font-NeueHaasDisplayLight text-NumerisGrey3 tracking-widest">
                        Due date
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisGrey text-sm">
                        May 19th, 2023
                      </Typography.Text>
                    </Flex>
                    <Flex vertical gap={8} justify="flex-end" className="">
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisDarkGrey text-base place-self-end">
                        $1,311,750.12
                      </Typography.Text>
                      <Typography.Text className="bg-NumerisGreenLight border-NumerisBadgeSuccess text-NumerisTextSuccess font-NeueHaasDisplayMedium font-medium text-xs uppercase h-8 flex flex-row items-center justify-center rounded-2xl text-right float-end tracking-widest place-self-end px-5 border">
                        PAID
                      </Typography.Text>
                    </Flex>
                  </div>

                  <div className="grid grid-cols-3 gap-x-4 w-[85%] mr-auto ml-auto">
                    <Flex vertical gap={4}>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-sm text-NumerisDarkGrey">
                        Invoice -
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-sm text-NumerisDarkGrey">
                        1023494 - 2304
                      </Typography.Text>
                    </Flex>
                    <Flex vertical gap={4}>
                      <Typography.Text className="uppercase text-xs font-normal font-NeueHaasDisplayLight text-NumerisGrey3 tracking-widest">
                        Due date
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisGrey text-sm">
                        May 19th, 2023
                      </Typography.Text>
                    </Flex>
                    <Flex vertical gap={8}>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisDarkGrey text-base place-self-end">
                        $1,311,750.12
                      </Typography.Text>
                      <Typography.Text className="bg-NumerisOverDueBg border-NumerisOverDue text-NumerisOverDueText font-NeueHaasDisplayMedium font-medium text-xs uppercase h-8  flex flex-row items-center justify-center rounded-2xl text-right float-end tracking-widest place-self-end px-8 border">
                        OVERDUE
                      </Typography.Text>
                    </Flex>
                  </div>
                </Flex>
              </Flex>

              <Flex vertical gap={34}>
                <Typography.Text className="uppercase font-medium font-NeueHaasDisplayMedium text-NumerisDark text-xs tracking-wider">
                  8th december, 2022
                </Typography.Text>

                <Flex vertical gap={38}>
                  <div className="grid grid-cols-3 gap-x-4 w-[85%] mr-auto ml-auto">
                    <Flex vertical gap={4}>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-sm text-NumerisDarkGrey">
                        Invoice -
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-sm text-NumerisDarkGrey">
                        1023494 - 2304
                      </Typography.Text>
                    </Flex>
                    <Flex vertical gap={8}>
                      <Typography.Text className="uppercase text-xs font-normal font-NeueHaasDisplayLight text-NumerisGrey3 tracking-widest">
                        Due date
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisGrey text-sm">
                        May 19th, 2023
                      </Typography.Text>
                    </Flex>
                    <Flex vertical gap={4}>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisDarkGrey text-base place-self-end">
                        $1,311,750.12
                      </Typography.Text>
                      <Typography.Text className="bg-NumerisLightGrey border-NumerisDarkBorder text-NumerisDarkGrey font-NeueHaasDisplayMedium font-medium text-xs uppercase h-8  flex flex-row items-center justify-center rounded-2xl text-right float-end tracking-widest place-self-end px-6 border">
                        DRAFT
                      </Typography.Text>
                    </Flex>
                  </div>

                  <div className="grid grid-cols-3 gap-x-4 w-[85%] mr-auto ml-auto">
                    <Flex vertical gap={4}>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-sm text-NumerisDarkGrey">
                        Invoice -
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-sm text-NumerisDarkGrey">
                        1023494 - 2304
                      </Typography.Text>
                    </Flex>
                    <Flex vertical gap={4}>
                      <Typography.Text className="uppercase text-xs font-normal font-NeueHaasDisplayLight text-NumerisGrey3 tracking-widest">
                        Due date
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisGrey text-sm">
                        May 19th, 2023
                      </Typography.Text>
                    </Flex>
                    <Flex vertical gap={8}>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisDarkGrey text-base place-self-end">
                        $1,311,750.12
                      </Typography.Text>
                      <Typography.Text className="bg-NumerisPendingBg border- NumerisPendingBorder text-NumerisPending font-NeueHaasDisplayMedium font-medium text-xs uppercase h-9 flex flex-row items-center justify-center rounded-2xl text-right float-end tracking-widest place-self-end px-8 whitespace-nowrap border">
                        PENDING PAYMENT
                      </Typography.Text>
                    </Flex>
                  </div>

                  <div className="grid grid-cols-3 gap-x-4 w-[85%] mr-auto ml-auto">
                    <Flex vertical gap={4}>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-sm text-NumerisDarkGrey">
                        Invoice -
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-sm text-NumerisDarkGrey">
                        1023494 - 2304
                      </Typography.Text>
                    </Flex>
                    <Flex vertical gap={4}>
                      <Typography.Text className="uppercase text-xs font-normal font-NeueHaasDisplayLight text-NumerisGrey3 tracking-widest">
                        Due date
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisGrey text-sm">
                        May 19th, 2023
                      </Typography.Text>
                    </Flex>
                    <Flex vertical gap={8}>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisDarkGrey text-base place-self-end">
                        $1,311,750.12
                      </Typography.Text>
                      <Typography.Text className="bg-NumerisGreenLight border-NumerisBadgeSuccess text-NumerisTextSuccess font-NeueHaasDisplayMedium font-medium text-xs uppercase h-8 flex flex-row items-center justify-center rounded-2xl text-right float-end tracking-widest place-self-end px-5 border">
                        PAID
                      </Typography.Text>
                    </Flex>
                  </div>
                </Flex>
              </Flex>
            </Flex>
          </Card>

          {/* RIGHT */}
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
            className="w-2/5 invoice_activities px-3 pb-8 self-stretch"
          >
            <Flex vertical gap={38}>
              {[1, 2, 3, 4].map((i) => {
                return (
                  <Flex align="start" gap={14} key={i}>
                    <Avatar
                      src={AvatarIcon}
                      size={"large"}
                      shape="circle"
                      style={{ width: "48px", height: "48px" }}
                    />
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-col">
                        <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-lg text-black">
                          Invoice creation
                        </Typography.Text>
                        <Typography.Text className="font-normal text-NumerisGrey font-NeueHaasDisplayLight text-sm">
                          Yesterday, 12:05 PM
                        </Typography.Text>
                      </div>
                      <div className="px-3 py-4 rounded-2xl bg-NumerisLightGrey flex flex-wrap items-center space-x-1">
                        <span className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-sm">
                          Created invoice
                        </span>
                        <span className="text-NumerisDarkGrey font-normal font-NeueHaasDisplayMedium text-sm">
                          00239434/Olaniyi Ojo Adewale
                        </span>
                      </div>
                    </div>
                  </Flex>
                );
              })}
            </Flex>
          </Card>
        </div>
      </Flex>
    </Flex>
  );
};

export default Invoice;
