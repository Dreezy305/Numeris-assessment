import { Avatar, Card, Divider, Flex, Typography } from "antd";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AvatarIcon from "../../assets/image10.png";
// import Icon13 from "../../assets/image13.png";
import { CheckIcon, IrisIcon } from "../icons/icons";

const InvoiceDetails = (): JSX.Element => {
  const WorkIcon = () => (
    <>
      <IrisIcon />
    </>
  );
  return (
    <div className="pt-6 w-full flex flex-col space-y-6">
      <div className="rounded-3xl border border-NumerisGreyBorder py-7 w-11/12 flex flex-row px-8">
        <Flex align="center" gap={10}>
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

      <div className="flex flex-row items-start space-x-8">
        <Card className="w-[65%] px-2 py-2 border card_border" title={null}>
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
                      <div className="flex flex-col space-y-1">
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
                    <Flex vertical gap={1}>
                      <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-NumerisDarkGrey text-base place-self-end tracking-wider">
                        Olaniyi Ojo Adewale
                      </Typography.Text>
                      <Typography.Text className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-xs place-self-end tracking-wider">
                        +386 989 271 3115
                      </Typography.Text>
                    </Flex>
                    <Typography.Text className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-xs place-self-end tracking-wider">
                      info@fabulousenterise.co
                    </Typography.Text>
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
            <Flex vertical gap={24}>
              <div className="w-full flex flex-col space-y-8 mb-6">
                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col w-2/5">
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-NumerisDark text-base">
                      Email Marketing
                    </Typography.Text>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-xs text-NumerisGrey3">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      10
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      $1,500
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      $15,000.00
                    </Typography.Text>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col space-y-2 w-2/5">
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-NumerisDark text-base">
                      Video looping effect
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      10
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      $1,500
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      $15,000.00
                    </Typography.Text>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col w-2/5">
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-NumerisDark text-base">
                      Graphic design for emails
                    </Typography.Text>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-xs text-NumerisGrey3">
                      Tsit voluptatem accusantium
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      10
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      $1,500
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      $15,000.00
                    </Typography.Text>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col w-2/5">
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-NumerisDark text-base">
                      Video looping effect
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      10
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      $1,500
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text className="font-normal font-NeueHaasDisplayLight text-base text-NumerisDark tracking-wider uppercase">
                      $15,000.00
                    </Typography.Text>
                  </div>
                </div>
              </div>

              <Flex vertical gap={8}>
                <div className="flex flex-row items-start justify-between w-1/2 float-end place-self-end">
                  <Typography.Text>Subtotal</Typography.Text>
                  <Typography.Text>$6,697,200.00</Typography.Text>
                </div>
                <div className="flex flex-row items-start justify-between w-1/2 float-end place-self-end">
                  <Typography.Text>Discount (2.5%)</Typography.Text>
                  <Typography.Text>$167,430.00</Typography.Text>
                </div>
                <div className="flex flex-row items-start justify-between w-1/2 float-end place-self-end">
                  <Typography.Text>Total amount due</Typography.Text>
                  <Typography.Text>$6,529,770.00</Typography.Text>
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

        <div className="w-[35%] self-stretch justify-start">
          <VerticalTimeline className="w-full">
            <VerticalTimelineElement
              className="vertical-timeline-element"
              contentStyle={{}}
              contentArrowStyle={{
                borderLeft: "",
              }}
              iconStyle={{ background: "", color: "" }}
              icon={<WorkIcon />}
              position="right"
            >
              <h3 className="vertical-timeline-element-title"></h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
