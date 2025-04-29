import { appScreenNames } from "@src/navigation";
import { profileSettingsType } from "@src/types/types";

export const profileSettings: profileSettingsType = [
  {
    title: "Bank Account",
    icon: require("@src/assets/png/profile/bank.png"),
    navigation: "",
  },
  {
    title: "Account Management",
    icon: require("@src/assets/png/profile/acct-mgt.png"),
    navigation: "",
  },
  {
    title: "Account Statement",
    icon: require("@src/assets/png/profile/acct-statement.png"),
    navigation: "",
  },
  {
    title: "Rewards",
    icon: require("@src/assets/png/profile/rewards.png"),
    navigation: appScreenNames.REWARDS,
  },
  {
    title: "Badges",
    icon: require("@src/assets/png/profile/badges.png"),
    navigation: appScreenNames.BADGES,
  },
  {
    title: "Security",
    icon: require("@src/assets/png/profile/security.png"),
    navigation: "",
  },
  {
    title: "Help & Support",
    icon: require("@src/assets/png/profile/help.png"),
    navigation: "",
  },
];
