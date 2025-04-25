export const getBtnText = (currStep: number) => {
  if (currStep === 1) {
    return {
      btnText: "Next",
      frmTitle: "",
      desc: "",
    };
  } else if (currStep === 2) {
    return {
      btnText: "Verify",
      frmTitle: "Verify your phone number",
      desc: "",
    };
  } else if (currStep === 3) {
    return {
      btnText: "Continue",
      frmTitle: "",
      desc: "",
    };
  } else if (currStep === 4) {
    return {
      btnText: "Verify",
      frmTitle: "Set your Security PIN",
      desc: "Set a six (6) digit pin that you would use for all transactions",
    };
  } else if (currStep === 5) {
    return {
      btnText: "Verify",
      frmTitle: "Confirm your Security PIN",
      desc: "Input your six (6) digit PIN again",
    };
  } else if (currStep === 6) {
    return {
      btnText: "Continue",
      frmTitle: "",
      desc: "",
    };
  } else if (currStep === 7) {
    return {
      btnText: "Submit",
      frmTitle: "Provide your BVN",
      desc: "Kindly provide your Bank Verification Number",
    };
  } else if (currStep === 8) {
    return {
      btnText: "Yes, please",
      frmTitle: "",
      desc: "",
    };
  } else if (currStep === 9) {
    return {
      btnText: "Continue",
      frmTitle: "Enter your email address",
      desc: "Please enter your email address",
    };
  } else if (currStep === 10) {
    return {
      btnText: "Continue",
      frmTitle: "Verify your email address",
      desc: "Please input the five (5) digit code that was sent to your email address below",
    };
  } else if (currStep === 11) {
    return {
      btnText: "Go to Dashboard",
      frmTitle: "",
      desc: "",
    };
  }
};
