import { authScreenTypes } from "@src/types/types";
import { authScreenNames } from "./navigation-names";
import { Onboarding } from "@src/screens/auth";

export const authScreen: authScreenTypes[] = [
  {
    screenName: authScreenNames.ONBOARDING,
    component: Onboarding,
  },
];
