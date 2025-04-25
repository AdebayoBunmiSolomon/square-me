import { authScreenTypes } from "@src/types/types";
import { authScreenNames } from "./navigation-names";
import * as Screen from "@src/screens/auth";

export const authScreen: authScreenTypes[] = [
  {
    screenName: authScreenNames.ONBOARDING,
    component: Screen.Onboarding,
  },
  {
    screenName: authScreenNames.LOGIN,
    component: Screen.Login,
  },
  {
    screenName: authScreenNames.SIGN_UP,
    component: Screen.SignUp,
  },
];
