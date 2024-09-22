import { Avatar, Steps, Typography } from "antd";
import Icon13 from "../../assets/image13.png";

const ModalStepper = () => {
  const stepitemStyle: React.CSSProperties = {
    minHeight: 150,
  };

  const StepAvatar = () => (
    <Avatar
      src={Icon13}
      style={{ width: "48px", height: "48px" }}
      size={"large"}
      shape="circle"
    />
  );
  return (
    <Steps
      current={undefined}
      onChange={undefined}
      direction="vertical"
      items={[
        {
          title: (
            <div className="flex flex-col ps-3 pb-3">
              <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-lg text-black">
                You
              </Typography.Text>
              <Typography.Text className="font-normal text-NumerisGrey font-NeueHaasDisplayLight text-sm">
                Today, 12:05 PM
              </Typography.Text>
            </div>
          ),
          icon: <StepAvatar />,
          style: { ...stepitemStyle },
          description: (
            <div className="px-3 py-4 rounded-2xl bg-NumerisLightGrey flex flex-wrap items-center space-x-1 ms-3">
              <span className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-sm">
                Created invoice
              </span>
              <span className="text-NumerisDarkGrey font-normal font-NeueHaasDisplayMedium text-sm">
                00239434/Olaniyi Ojo Adewale
              </span>
            </div>
          ),
        },
        {
          title: (
            <div className="flex flex-col ps-3 pb-3">
              <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-lg text-black">
                You
              </Typography.Text>
              <Typography.Text className="font-normal text-NumerisGrey font-NeueHaasDisplayLight text-sm">
                Today, 12:05 PM
              </Typography.Text>
            </div>
          ),
          icon: <StepAvatar />,
          style: { ...stepitemStyle },
          description: (
            <span className="px-3 py-4 rounded-2xl bg-NumerisLightGrey flex flex-wrap items-center space-x-1 ms-3 mb-8">
              <span className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-sm">
                Sent invoice
              </span>
              <span className="text-NumerisDarkGrey font-normal font-NeueHaasDisplayMedium text-sm">
                00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale
              </span>
            </span>
          ),
        },
        {
          title: (
            <div className="flex flex-col ps-3 pb-3">
              <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-lg text-black">
                Payment Confirmed
              </Typography.Text>
              <Typography.Text className="font-normal text-NumerisGrey font-NeueHaasDisplayLight text-sm">
                Today, 12:05 PM
              </Typography.Text>
            </div>
          ),
          icon: <StepAvatar />,
          style: { ...stepitemStyle },
          description: (
            <span className="px-3 py-4 rounded-2xl bg-NumerisLightGrey flex flex-wrap items-center space-x-1 ms-3">
              <span className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-sm">
                You manually confirmed a partial payment of
              </span>
              <span className="text-NumerisDarkGrey font-normal font-NeueHaasDisplayMedium text-sm">
                $503,000.00
              </span>
            </span>
          ),
        },
        {
          title: (
            <div className="flex flex-col ps-3 pb-3">
              <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-lg text-black">
                Payment Confirmed
              </Typography.Text>
              <Typography.Text className="font-normal text-NumerisGrey font-NeueHaasDisplayLight text-sm">
                Today, 12:05 PM
              </Typography.Text>
            </div>
          ),
          icon: <StepAvatar />,
          style: { ...stepitemStyle },
          description: (
            <span className="px-3 py-4 rounded-2xl bg-NumerisLightGrey flex flex-wrap items-center space-x-1 ms-3">
              <span className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-sm">
                You manually confirmed a full payment of
              </span>
              <span className="text-NumerisDarkGrey font-normal font-NeueHaasDisplayMedium text-sm">
                $6,000,000.00
              </span>
            </span>
          ),
        },
        {
          title: (
            <div className="flex flex-col ps-3 pb-3">
              <Typography.Text className="font-medium font-NeueHaasDisplayMedium text-lg text-black">
                You
              </Typography.Text>
              <Typography.Text className="font-normal text-NumerisGrey font-NeueHaasDisplayLight text-sm">
                Today, 12:05 PM
              </Typography.Text>
            </div>
          ),
          icon: <StepAvatar />,
          style: { ...stepitemStyle },
          description: (
            <span className="px-3 py-4 rounded-2xl bg-NumerisLightGrey flex flex-wrap items-center space-x-1 ms-3">
              <span className="text-NumerisGrey font-normal font-NeueHaasDisplayLight text-sm">
                Sent invoice
              </span>
              <span className="text-NumerisDarkGrey font-normal font-NeueHaasDisplayMedium text-sm">
                00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale
              </span>
            </span>
          ),
        },
      ]}
      className="tail"
    />
  );
};

export default ModalStepper;
