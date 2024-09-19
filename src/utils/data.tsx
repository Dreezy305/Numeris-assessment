import {
  InvoiceCustomerIcon,
  InvoiceSettingIcon,
  MoneyIcon,
} from "../components/icons/icons";
import { IInvoice, IInvoiceActions } from "./types";

export const invoice_data: Array<IInvoice> = [
  {
    title: "total paid",
    fee: "1,289",
    amount: "$4,120,102.76",
    color: "bg-NumerisGreen",
  },
  {
    title: "total overdue",
    fee: "13",
    amount: "$23,000.13",
    color: "bg-NumerisDanger",
  },
  {
    title: "total draft",
    fee: "08",
    amount: "$12,200.00",
    color: "bg-NumerisAsh",
  },
  {
    title: "total unpaid",
    fee: "06",
    amount: "$87102.00",
    color: "bg-NumerisYellow",
  },
];

export const invoice_actions: Array<IInvoiceActions> = [
  {
    icon: <MoneyIcon />,
    title: "Create New Invoice",
    subtitle: "Create new invoices easily ",
    color: "bg-NumerisBlue",
    bgColor: "bg-NumerisBlue",
    subTitleColor: "text-NumerisLightGrey",
    titleColor: "text-white",
  },
  {
    icon: <InvoiceSettingIcon />,
    title: "Change Invoice settings",
    subtitle: "Customise your invoices",
    color: "bg-white",
    bgColor: "bg-white",
    subTitleColor: "text-NumerisGrey",
    titleColor: "text-NumerisDarkGrey",
  },
  {
    icon: <InvoiceCustomerIcon />,
    title: "Manage Customer list",
    subtitle: "Add and remove customers",
    color: "bg-white",
    bgColor: "bg-white",
    subTitleColor: "text-NumerisGrey",
    titleColor: "text-NumerisDarkGrey",
  },
];
