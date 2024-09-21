import { Card, Flex, Typography } from "antd";
import { CheckIcon } from "../icons/icons";

const InvoiceDetails = (): JSX.Element => {
  return (
    <div className="pt-6 w-full flex flex-col space-y-6">
      <div className="rounded-3xl border border-NumerisGreyBorder py-7 w-full flex flex-row px-8">
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
          <div className="bg-NumerisPink px-3 py-4 invoice_activities"></div>
        </Card>

        <div className="w-[35%] self-stretch"></div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
