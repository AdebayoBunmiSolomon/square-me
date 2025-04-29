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

export const fpGetBtnText = (currStep: number) => {
  if (currStep === 1) {
    return {
      btnText: "Next",
      frmTitle: "",
      desc: "",
    };
  } else if (currStep === 2) {
    return {
      btnText: "Whatsapp",
      frmTitle: "Verify your phone number",
      desc: "Please input the five (5) digit code that was sent to your phone number below",
    };
  } else if (currStep === 3) {
    return {
      btnText: "Continue",
      frmTitle: "Create new PIN",
      desc: "Enter a new a six (6) digit pin that you would use for all transactions",
    };
  } else if (currStep === 4) {
    return {
      btnText: "Continue",
      frmTitle: "Confirm your Security PIN",
      desc: "Input your six (6) digit PIN again",
    };
  } else if (currStep === 5) {
    return {
      btnText: "Login",
      frmTitle: "",
      desc: "",
    };
  }
};

export const formatAmountWithCommas = (amount: number) => {
  let amtStr = amount.toString();
  let formattedAmt = amtStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedAmt;
};

export const formatUsername = (username: string) => {
  if (!username) return "";
  let cleanUsername = username.replace(/^@/, "");
  cleanUsername = cleanUsername.replace(/[0-9]/g, "");
  const parts = cleanUsername.match(/[A-Za-z][a-z]*/g) || [];
  const formattedName = parts
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedName.toUpperCase();
};

export const getInitials = (name: string): string => {
  if (!name) return "";

  const parts = name.trim().split(" ");
  const initials = parts.map((part) => part.charAt(0).toUpperCase()).join("");
  return initials;
};
