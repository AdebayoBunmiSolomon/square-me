import { appScreenTypes } from "@src/types/types";
import { appScreenNames } from "./navigation-names";
import { BottomTabStack } from "@src/router/bottom-tab-stack";
import { BillPayment, Notifications } from "@src/screens/app";
import { RequestMoney, SendMoney } from "@src/screens/app/bottom-tab/payment";

export const appScreens: appScreenTypes[] = [
  //this houses the bottom tab screens
  {
    screenName: appScreenNames.BOTTOM_TAB,
    component: BottomTabStack,
  },
  {
    screenName: appScreenNames.NOTIFICATIONS,
    component: Notifications,
  },
  {
    screenName: appScreenNames.BILL_PAYMENT,
    component: BillPayment,
  },
  {
    screenName: appScreenNames.SEND_MONEY,
    component: SendMoney,
  },
  {
    screenName: appScreenNames.REQUEST_MONEY,
    component: RequestMoney,
  },
];
