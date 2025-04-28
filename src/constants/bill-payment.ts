import { appScreenNames } from "@src/navigation";
import { billPaymentTypes } from "@src/types/types";

export const billPayment: billPaymentTypes = [
  {
    title: "Send Money",
    desc: "Send money to anyone instantly",
    icon: require("@src/assets/png/send.png"),
    screen: appScreenNames.SEND_MONEY,
  },
  {
    title: "Request Money",
    desc: "Send money to anyone instantly",
    icon: require("@src/assets/png/receive.png"),
    screen: appScreenNames.REQUEST_MONEY,
  },
];
