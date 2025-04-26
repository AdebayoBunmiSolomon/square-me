import { appScreenTypes } from "@src/types/types";
import { appScreenNames } from "./navigation-names";
import { BottomTabStack } from "@src/router/bottom-tab-stack";

export const appScreens: appScreenTypes[] = [
  //this houses the bottom tab screens and drawer screens
  {
    screenName: appScreenNames.BOTTOM_TAB,
    component: BottomTabStack,
  },
];
