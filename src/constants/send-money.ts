import { sendMoneyOptionTypes } from "@src/types/types";

export const sendMoneyOptions: sendMoneyOptionTypes[] = [
  require("@src/assets/png/send-to-bank-acct.png"),
  require("@src/assets/png/send-to-beneficiary.png"),
  require("@src/assets/png/send-to-squarme-tag.png"),
  require("@src/assets/png/send-to-contact-list.png"),
];

export const requestMoneyOptions: sendMoneyOptionTypes[] = [
  require("@src/assets/png/request-from-beneficiary.png"),
  require("@src/assets/png/request-from-contact-list.png"),
  require("@src/assets/png/request-using-squareme-tag.png"),
];
