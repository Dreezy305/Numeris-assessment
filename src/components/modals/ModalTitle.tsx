import { Button, Dropdown, Flex, Typography } from "antd";
import useResize from "../../hooks/resize.hooks";
import { items } from "../../utils/menuitems";

const ModalTitle = () => {
  const { size } = useResize();
  return (
    <Flex
      wrap
      align="flex-start"
      justify="space-between"
      className={`${size[0] < 768 ? "pb-12 mb-12 h-44" : "h-28 pb-8"} `}
      style={{ height: size[0] <= 820 ? "200px" : "" }}
    >
      <Flex vertical={size[0] > 768} gap={20} className="place-content-start">
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
      <Flex gap={16} className="py-3 pb-8 place-self-start">
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
    </Flex>
  );
};

export default ModalTitle;
