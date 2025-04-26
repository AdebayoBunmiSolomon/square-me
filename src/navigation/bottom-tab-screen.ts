import { bottomTabScreenTypes } from "@src/types/types";
import { bottomTabScreenNames } from "./navigation-names";
import * as Screen from "@src/screens/app/bottom-tab";

export const bottomTabScreens: bottomTabScreenTypes[] = [
  {
    screenName: bottomTabScreenNames.HOME,
    component: Screen.Home,
  },
  {
    screenName: bottomTabScreenNames.PAYMENTS,
    component: Screen.Payments,
  },
  {
    screenName: bottomTabScreenNames.MORE,
    component: Screen.More,
  },
  {
    screenName: bottomTabScreenNames.PROFILE,
    component: Screen.Profile,
  },
];
