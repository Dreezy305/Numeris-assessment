import { Avatar, Card, Flex, Typography } from "antd";
import AvatarIcon from "../../assets/image10.png";
import { CheckIcon } from "../icons/icons";

const InvoiceDetails = (): JSX.Element => {
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
          <Flex vertical gap={12}>
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
          </Flex>
        </Card>

        <div className="w-[35%] self-stretch"></div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
