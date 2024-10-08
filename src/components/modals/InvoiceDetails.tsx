import { Avatar, Card, Col, Divider, Flex, Row, Typography } from "antd";
import "react-vertical-timeline-component/style.min.css";
import AvatarIcon from "../../assets/image10.png";
import useResize from "../../hooks/resize.hooks";
import { CheckIcon } from "../icons/icons";
import ModalStepper from "./ModalStepper";

const InvoiceDetails = (): JSX.Element => {
  const { size } = useResize();
  return (
    <div className="pt-6 w-full flex flex-col space-y-9 mt-40 md:mt-0 lg:mt-0 xl:mt-0">
      <div className="rounded-3xl border border-NumerisGreyBorder py-7 md:w-full lg:w-full xl:w-11/12 md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row md:px-3 lg:px-6 xl:px-8">
        <Flex wrap={size[0] <= 1024} align="center" gap={14}>
          <Typography.Text className="uppercase text-NumerisGrey3 font-normal font-NeueHaasDisplayLight text-xs">
            Reminders
          </Typography.Text>
          <Typography.Text className="bg-NumerisGreenLight border-NumerisBadgeSuccess text-NumerisDarkGrey font-NeueHaasDisplayMedium font-medium text-xs uppercase h-11 flex flex-row items-center justify-center rounded-3xl text-right float-end tracking-normal place-self-end px-3">
            14 days before due date <CheckIcon />
          </Typography.Text>
          <Typography.Text className="bg-NumerisGreenLight border-NumerisBadgeSuccess text-NumerisDarkGrey font-NeueHaasDisplayMedium font-medium text-xs uppercase h-11 flex flex-row items-center justify-center rounded-3xl text-right float-end tracking-normal place-self-end px-3">
            7 days before due date <CheckIcon />
          </Typography.Text>
          <Typography.Text className="bg-NumerisLightGrey border-NumerisDarkBorder text-NumerisDarkGrey font-NeueHaasDisplayMedium font-medium text-xs uppercase h-11  flex flex-row items-center justify-center rounded-3xl text-right float-end tracking-normal place-self-end px-6">
            3 days before due date
          </Typography.Text>
          <Typography.Text className="bg-NumerisLightGrey border-NumerisDarkBorder text-NumerisDarkGrey font-NeueHaasDisplayMedium font-medium text-xs uppercase h-11  flex flex-row items-center justify-center rounded-3xl text-right float-end tracking-normal place-self-end px-6">
            24 hrs before due date
          </Typography.Text>
          <Typography.Text className="bg-NumerisLightGrey border-NumerisDarkBorder text-NumerisDarkGrey font-NeueHaasDisplayMedium font-medium text-xs uppercase h-11 flex flex-row items-center justify-center rounded-3xl text-right float-end tracking-normal place-self-end px-6">
            On the due date
          </Typography.Text>
        </Flex>
      </div>

      <div className="flex flex-col space-y-8 lg:flex lg:flex-row lg:items-start lg:space-x-8 xl:flex xl:flex-row xl:items-start xl:space-x-8">
        <Card
          className="lg:w-3/4 xl:w-[65%] px-2 py-2 border card_border"
          title={null}
        >
          <Flex vertical gap={24}>
            <div className="bg-NumerisPink px-10 py-8 invoice_activities">
              <div className="flex flex-col space-y-12">
                <div className="flex flex-row items-start justify-between">
                  <div className="flex flex-col space-y-4">
                    <Typography.Text className="uppercase tracking-wider text-NumerisGrey font-NeueHaasDisplayMedium font-medium text-xs">
                      sender
                    </Typography.Text>
                    <div className="flex flex-row items-start space-x-4">
                      <Avatar
                        shape="square"
                        className="bg-white"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "16px",
                        }}
                        size={"large"}
                        src={AvatarIcon}
                      />
                      <div className="flex flex-col space-y-2">
                        <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisDarkGrey text-base tracking-wider">
                          Fabulous Enterprise
                        </Typography.Text>
                        <Typography.Text className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-xs tracking-wider">
                          +386 989 271 3115
                        </Typography.Text>
                        <Typography.Text className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-xs tracking-wider">
                          1331 Hart Ridge Road 48436 Gaines, MI
                        </Typography.Text>
                        <Typography.Text className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-xs tracking-wider">
                          info@fabulousenterise.co
                        </Typography.Text>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <Typography.Text className="uppercase tracking-wider text-NumerisGrey font-NeueHaasDisplayMedium font-medium text-xs place-self-end">
                      Customer
                    </Typography.Text>
                    <Flex vertical gap={6}>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisDarkGrey text-base place-self-end tracking-wider">
                        Olaniyi Ojo Adewale
                      </Typography.Text>
                      <Typography.Text className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-xs place-self-start tracking-wider">
                        +386 989 271 3115
                      </Typography.Text>
                      <Typography.Text className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-xs place-self-start tracking-wider">
                        info@fabulousenterise.co
                      </Typography.Text>
                    </Flex>
                  </div>
                </div>

                <div className="flex flex-col space-y-4">
                  <Typography.Text className="uppercase  text-NumerisGrey font-NeueHaasDisplayMedium font-medium text-xs tracking-wider">
                    invoice details
                  </Typography.Text>

                  <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-col space-y-1">
                      <Typography.Text className="font-NeueHaasDisplayThin font-normal text-NumerisGrey3 text-xs uppercase tracking-wider">
                        invoice no
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xs text-NumerisDark tracking-wider uppercase">
                        1023902390
                      </Typography.Text>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <Typography.Text className="font-NeueHaasDisplayThin font-normal text-NumerisGrey3 text-xs uppercase tracking-wider">
                        issue date
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xs text-NumerisDark tracking-wider uppercase">
                        March 30th, 2023
                      </Typography.Text>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <Typography.Text className="font-NeueHaasDisplayThin font-normal text-NumerisGrey3 text-xs uppercase tracking-wider">
                        expiry date
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xs text-NumerisDark tracking-wider uppercase">
                        March 19th, 2023
                      </Typography.Text>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <Typography.Text className="font-NeueHaasDisplayThin font-normal text-NumerisGrey3 text-xs uppercase tracking-wider">
                        Billing currency
                      </Typography.Text>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xs text-NumerisDark tracking-wider uppercase">
                        USD ($)
                      </Typography.Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Divider orientation="left" plain orientationMargin="0">
              <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisDarkGrey text-xl tracking-normal capitalize">
                Items
              </Typography.Text>
            </Divider>

            {/* ITEMS RECEIPT */}
            <Flex vertical gap={28} style={{ width: "100%" }}>
              <Row style={{ width: "100%" }}>
                <Col span={6}>
                  <div className="flex flex-col">
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-NumerisDark text-base">
                      Email Marketing
                    </Typography.Text>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-xs text-NumerisGrey3">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase text-right">
                    10
                  </Typography.Text>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                    $1,500
                  </Typography.Text>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                    $15,000.00
                  </Typography.Text>
                </Col>
              </Row>

              <Row style={{ width: "100%" }}>
                <Col span={6}>
                  <div className="flex flex-col">
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-NumerisDark text-base">
                      Video looping effect
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase text-left">
                    6
                  </Typography.Text>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase text-right">
                    $1,110,500
                  </Typography.Text>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase text-right">
                    $1,110,500
                  </Typography.Text>
                </Col>
              </Row>

              <Row style={{ width: "100%" }}>
                <Col span={6}>
                  <div className="flex flex-col">
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-NumerisDark text-base">
                      Graphic design for emails
                    </Typography.Text>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-xs text-NumerisGrey3">
                      Tsit voluptatem accusantium
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                    7
                  </Typography.Text>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                    $2,750
                  </Typography.Text>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                    $19,250.00
                  </Typography.Text>
                </Col>
              </Row>
              <Row>
                <Col span={6}>
                  <div className="flex flex-col">
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-NumerisDark text-base">
                      Video looping effect
                    </Typography.Text>
                  </div>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                    6
                  </Typography.Text>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                    $1,110,500
                  </Typography.Text>
                </Col>
                <Col span={6} className="text-end">
                  <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                    $6,663,000.00
                  </Typography.Text>
                </Col>
              </Row>

              <Flex vertical gap={18} className="mt-5">
                <div className="flex flex-row items-start justify-between md:w-3/4 lg:w-3/4 xl:w-3/5 float-end place-self-end">
                  <Typography.Text className="uppercase text-NumerisGrey2 text-sm font-NeueHaasDisplayLight font-normal tracking-wider">
                    Subtotal
                  </Typography.Text>
                  <Typography.Text className="text-xl text-NumerisDark font-light font-NeueHaasDisplayLight">
                    $6,697,200.00
                  </Typography.Text>
                </div>
                <div className="flex flex-row items-start justify-between md:w-3/4 lg:w-3/4 xl:w-3/5 float-end place-self-end">
                  <Typography.Text className="uppercase text-NumerisGrey2 text-sm font-NeueHaasDisplayLight font-normal tracking-wider">
                    Discount (2.5%)
                  </Typography.Text>
                  <Typography.Text className="text-xl text-NumerisDark font-light font-NeueHaasDisplayLight">
                    $167,430.00
                  </Typography.Text>
                </div>
                <div className="flex flex-row items-center justify-between md:w-3/4 lg:w-3/4 xl:w-3/5 float-end place-self-end pt-4">
                  <Typography.Text className="text-NumerisDarkGrey font-medium font-NeueHaasDisplayMedium text-lg tracking-wider uppercase">
                    Total amount due
                  </Typography.Text>
                  <Typography.Text className=" text-NumerisDarkGrey font-bold font-NeueHaasDisplayBold text-2xl">
                    $6,529,770.00
                  </Typography.Text>
                </div>
              </Flex>
            </Flex>

            <div className="rounded-3xl border px-4 py-5 flex flex-col space-y-3 mt-8">
              <Typography.Text className="uppercase tracking-widest text-NumerisGrey font-NeueHaasDisplayMedium font-medium text-xs place-self-start">
                Payment information
              </Typography.Text>

              <div className="grid grid-cols-4 gap-y-4">
                <div className="flex flex-col space-y-1">
                  <Typography.Text className="font-NeueHaasDisplayThin font-normal text-NumerisGrey3 text-xs uppercase tracking-widest">
                    Account name
                  </Typography.Text>
                  <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xs text-NumerisDark tracking-wider uppercase">
                    1023902390
                  </Typography.Text>
                </div>
                <div className="flex flex-col space-y-1">
                  <Typography.Text className="font-NeueHaasDisplayThin font-normal text-NumerisGrey3 text-xs uppercase tracking-widest">
                    account number
                  </Typography.Text>
                  <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xs text-NumerisDark tracking-wider uppercase">
                    1023902390
                  </Typography.Text>
                </div>
                <div className="flex flex-col space-y-1">
                  <Typography.Text className="font-NeueHaasDisplayThin font-normal text-NumerisGrey3 text-xs uppercase tracking-widest">
                    Ach routing no
                  </Typography.Text>
                  <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xs text-NumerisDark tracking-wider uppercase">
                    May 19th, 2023
                  </Typography.Text>
                </div>
                <div className="flex flex-col space-y-1">
                  <Typography.Text className="font-NeueHaasDisplayThin font-normal text-NumerisGrey3 text-xs uppercase tracking-widest">
                    Bank name
                  </Typography.Text>
                  <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xs text-NumerisDark tracking-wider uppercase">
                    USD ($)
                  </Typography.Text>
                </div>
                <div className="flex flex-col space-y-1">
                  <Typography.Text className="font-NeueHaasDisplayThin font-normal text-NumerisGrey3 text-xs uppercase tracking-widest">
                    bank address
                  </Typography.Text>
                  <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xs text-NumerisDark tracking-wider uppercase">
                    1023902390
                  </Typography.Text>
                </div>
                <div className="flex flex-col space-y-1">
                  <Typography.Text className="font-NeueHaasDisplayThin font-normal text-NumerisGrey3 text-xs uppercase tracking-widest">
                    Account name
                  </Typography.Text>
                  <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-xs text-NumerisDark tracking-wider uppercase">
                    March 30th, 2023
                  </Typography.Text>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border px-4 py-5 flex flex-col space-y-1 bg-NumerisLightGrey">
              <Typography.Text className="text-NumerisGrey2 font-normal font-NeueHaasDisplayLight text-sm">
                NOTE
              </Typography.Text>
              <Typography.Text className="text-NumerisGrey3 font-normal font-NeueHaasDisplayLight text-base tracking-wider">
                Thank you for your patronage
              </Typography.Text>
            </div>
          </Flex>
        </Card>

        <div className="xl:w-[35%] self-stretch justify-start">
          <Flex vertical gap={16}>
            <Typography.Text className="font-NeueHaasDisplayMedium font-medium text-xl text-NumerisDark">
              Invoice Activity
            </Typography.Text>

            <ModalStepper />
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
