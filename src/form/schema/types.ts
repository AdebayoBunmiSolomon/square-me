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
export type verifyEmailAddressFrmTypes = {
  email_address: string;
};
