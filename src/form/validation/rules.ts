import * as yup from "yup";

export const createAcctFrmValidation = yup.object().shape({
  phone_number: yup.string().required("phone number is required"),
  referral_code: yup.string().required("referral code is required"),
});

export const verifyPhoneNumberFrmValidation = yup.object().shape({
  code: yup.string().required("code is required"),
});

export const securityPinFrmValidation = yup.object().shape({
  security_pin: yup.string().required("security PIN is required"),
});

export const confirmSecurityPinFrmValidation = yup.object().shape({
  security_pin: yup.string().required("security PIN is required"),
});

export const bvnFrmValidation = yup.object().shape({
  bvn: yup.string().required("BVN is required"),
});

export const enterEmailAddressFrmValidation = yup.object().shape({
  email_address: yup
    .string()
    .email("invalid email address")
    .required("email is required"),
});

export const verifyEmailAddressFrmValidation = yup.object().shape({
  code: yup.string().required("code is required"),
});

export const FpEnterPhoneNumberFrmValidation = yup.object().shape({
  phone_number: yup.string().required("phone number is required"),
});

export const FpVerifyPhoneNumberFrmValidation = yup.object().shape({
  code: yup.string().required("code is required"),
});

export const FpCreatePinFrmValidation = yup.object().shape({
  pin: yup.string().required("PIN is required"),
});

export const FpConfirmPinFrmValidation = yup.object().shape({
  pin: yup.string().required("PIN is required"),
});

export const sendUsingSquareMeTagFrm1Validation = yup.object().shape({
  square_tag: yup.string().required("squareme tag is required"),
  purpose: yup.string().required("purpose is required"),
  amount: yup.string().required("amount is required"),
});

export const sendUsingSquareMeTagFrm2Validation = yup.object().shape({
  beneficiary: yup.string().required("beneficiary is required"),
  purpose: yup.string().required("purpose is required"),
  amount: yup.string().required("amount is required"),
});

export const sendUsingSquareMeTagFrm4Validation = yup.object().shape({
  pin: yup.string().required("PIN is required"),
});

export const sendToContactListFrm1Validation = yup.object().shape({
  phone_number: yup.string().required("phone number is required"),
  purpose: yup.string().required("purpose is required"),
  amount: yup.string().required("amount is required"),
  // save_beneficiary: yup.string().required("amount is required"),
});

export const sendToContactListFrm3Validation = yup.object().shape({
  pin: yup.string().required("PIN is required"),
});
