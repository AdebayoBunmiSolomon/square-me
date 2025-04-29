//sign up step 1
export type createAcctFrmTypes = {
  phone_number: string;
  referral_code: string;
};

//sign up step 2
export type verifyPhoneNumberFrmTypes = {
  code: string;
};

//sign up step 3
export type securityPinFrmTypes = {
  security_pin: string;
};

//sign up step 4
export type confirmSecurityPinFrmTypes = {
  security_pin: string;
};

//sign up step 5
export type bvnFrmTypes = {
  bvn: string;
};

//sign up step 6
export type enterEmailAddressFrmTypes = {
  email_address: string;
};

//sign up step 7
export type verifyEmailAddressFrmTypes = {
  code: string;
};

//forgot password step 1
export type FpEnterPhoneNumberFrmTypes = {
  phone_number: string;
};

//forgot password step 2
export type FpVerifyPhoneNumberFrmTypes = {
  code: string;
};

//forgot password step 3
export type FpCreatePinFrmTypes = {
  pin: string;
};

//forgot password step 4
export type FpConfirmPinFrmTypes = {
  pin: string;
};

//send using square me tag step 1
export type sendUsingSquareTagFrm1Types = {
  square_tag: string;
  purpose: string;
  amount: string;
};

//send using square me tag step 2
export type sendUsingSquareTagFrm2Types = {
  beneficiary: string;
  purpose: string;
  amount: string;
};

//send using square me tag step 4
export type sendUsingSquareTagFrm4Types = {
  pin: string;
};

//send to contact list step 1
export type sendToContactListFrm1Types = {
  phone_number: string;
  purpose: string;
  amount: string;
  // save_beneficiary: string;
};

//send to contact list step 3
export type sendToContactListFrm3Types = {
  pin: string;
};
