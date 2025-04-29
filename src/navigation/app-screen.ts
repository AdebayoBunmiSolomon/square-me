import { appScreenTypes } from "@src/types/types";
import { appScreenNames } from "./navigation-names";
import { BottomTabStack } from "@src/router/bottom-tab-stack";
import {
  Badges,
  BillPayment,
  Notifications,
  RequestUsingBeneficiary,
  RequestUsingContactList,
  RequestUsingSquareTag,
  Rewards,
  SendToBeneficiary,
  SendToContactList,
  SendUsingSquareTag,
} from "@src/screens/app";
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
  {
    screenName: appScreenNames.SEND_USING_SQUARE_TAG,
    component: SendUsingSquareTag,
  },
  {
    screenName: appScreenNames.SEND_TO_CONTACT_LIST,
    component: SendToContactList,
  },
  {
    screenName: appScreenNames.BADGES,
    component: Badges,
  },
  {
    screenName: appScreenNames.REWARDS,
    component: Rewards,
  },
  {
    screenName: appScreenNames.SEND_TO_BENEFICIARY,
    component: SendToBeneficiary,
  },
  {
    screenName: appScreenNames.REQUEST_USING_SQUARE_TAG,
    component: RequestUsingSquareTag,
  },
  {
    screenName: appScreenNames.REQUEST_USING_BENEFICIARY,
    component: RequestUsingBeneficiary,
  },
  {
    screenName: appScreenNames.REQUEST_USING_CONTACT_LIST,
    component: RequestUsingContactList,
  },
];
