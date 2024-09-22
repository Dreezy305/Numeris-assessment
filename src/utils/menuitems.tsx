import { MenuProps, Typography } from "antd";
import {
  BeneficiaryIcon,
  HelpIcon,
  HomeIcon,
  InvoiceIcon,
  OverviewIcon,
  SettingsIcon,
} from "../components/icons/icons";
type MenuItem = Required<MenuProps>["items"][number];

const itemStyle: React.CSSProperties = {
  marginBottom: "14px",
  height: "52px",
  fontSize: "14px",
};

// eslint-disable-next-line react-refresh/only-export-components
const ItemLabel = ({ text }: { text: string }): JSX.Element => {
  return (
    <Typography.Text className="font-NeueHaasDisplayLight text-NumerisGrey text-sm font-normal">
      {text}
    </Typography.Text>
  );
};

export const Items: MenuItem[] = [
  {
    key: "1",
    icon: (
      <div className="pr-1">
        <HomeIcon />
      </div>
    ),
    label: <ItemLabel text="Getting Started" />,
    onClick: () => {},
    style: { ...itemStyle },
    className: "item_style",
    disabled: true,
  },
  {
    key: "2",
    icon: (
      <div className="pr-1">
        <OverviewIcon />
      </div>
    ),
    label: <ItemLabel text="Overview" />,
    onClick: () => {},
    style: { ...itemStyle },
    className: "item_style",
    disabled: true,
  },
  {
    key: "3",
    icon: (
      <div className="pr-1">
        <HomeIcon />
      </div>
    ),
    label: <ItemLabel text="Accounts" />,
    onClick: () => {},
    style: { ...itemStyle },
    className: "item_style",
    disabled: true,
  },
  {
    key: "4",
    icon: (
      <div className="pr-1">
        <InvoiceIcon />
      </div>
    ),
    label: <ItemLabel text="Invoice" />,
    onClick: () => {},
    style: { ...itemStyle },
    className: "item_style",
  },
  {
    key: "5",
    icon: (
      <div className="pr-1">
        <BeneficiaryIcon />
      </div>
    ),
    label: <ItemLabel text="Beneficiary Management" />,
    onClick: () => {},
    style: { ...itemStyle },
    className: "item_style",
    disabled: true,
  },
  {
    key: "6",
    icon: (
      <div className="pr-1">
        <HelpIcon />
      </div>
    ),
    label: <ItemLabel text="Help Center" />,
    onClick: () => {},
    style: { ...itemStyle },
    className: "item_style",
    disabled: true,
  },
  {
    key: "7",
    icon: (
      <div className="pr-1">
        <SettingsIcon />
      </div>
    ),
    label: <ItemLabel text="Settings" />,
    onClick: () => {},
    style: { ...itemStyle },
    className: "item_style",
    disabled: true,
  },
];

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Typography.Text className="font-medium font-NeueHaasDisplayMedium uppercase text-sm text-NumerisGrey tracking-wider py-8 mb-8">
        Duplicate invoice
      </Typography.Text>
    ),
  },
  {
    key: "2",
    label: (
      <Typography.Text className="font-medium font-NeueHaasDisplayMedium uppercase text-sm text-NumerisGrey tracking-wider py-8">
        get sharable link
      </Typography.Text>
    ),
  },
];
