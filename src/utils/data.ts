import { IInvoice } from "./types";

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
