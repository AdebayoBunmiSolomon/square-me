import { quickActionsTypes, suggestedActionsTypes } from "@src/types/types";

export const quickActions: quickActionsTypes[] = [
  {
    image: require("@src/assets/png/quick-actions/fund-wallet.png"),
  },
  {
    image: require("@src/assets/png/quick-actions/withdraw.png"),
  },
  {
    image: require("@src/assets/png/quick-actions/pay-bills.png"),
  },
  {
    image: require("@src/assets/png/quick-actions/cards.png"),
  },
  {
    image: require("@src/assets/png/quick-actions/squareme-pot.png"),
  },
  {
    image: require("@src/assets/png/quick-actions/airtime.png"),
  },
  {
    image: require("@src/assets/png/quick-actions/data.png"),
  },
  {
    image: require("@src/assets/png/quick-actions/cable-tv.png"),
  },
  {
    image: require("@src/assets/png/quick-actions/utility.png"),
  },
];

export const suggestedActions: suggestedActionsTypes[] = [
  {
    title: "Earn up to 14% Interest on your locked funds",
    image: require("@src/assets/png/piggy-bank.png"),
  },
  {
    title: "Speed up your bills payments",
    image: require("@src/assets/png/suggested-action.png"),
  },
];
