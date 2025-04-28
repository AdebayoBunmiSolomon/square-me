import { appScreenTypes } from "@src/types/types";
import { appScreenNames } from "./navigation-names";
import { BottomTabStack } from "@src/router/bottom-tab-stack";
import { Notifications } from "@src/screens/app";

export const appScreens: appScreenTypes[] = [
  //this houses the bottom tab screens and drawer screens
  {
    screenName: appScreenNames.BOTTOM_TAB,
    component: BottomTabStack,
  },
  {
    screenName: appScreenNames.NOTIFICATIONS,
    component: Notifications,
  },
];
