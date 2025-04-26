import { authScreenNames } from "@src/navigation";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { Screen } from "../Screen";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "../Scroll-Container";
import { ActionHeader, ActionText, IconHeader } from "@src/common";
import { CustomButton, CustomText } from "@src/components/shared";
import {
  Step1,
  Step10,
  Step11,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
} from "@src/components/auth/sign-up";
import { useStepper } from "@src/hooks/services";
import {
  bvnFrmTypes,
  confirmSecurityPinFrmTypes,
  createAcctFrmTypes,
  securityPinFrmTypes,
  verifyPhoneNumberFrmTypes,
  enterEmailAddressFrmTypes,
  verifyEmailAddressFrmTypes,
} from "@src/form/schema/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  bvnFrmValidation,
  confirmSecurityPinFrmValidation,
  createAcctFrmValidation,
  securityPinFrmValidation,
  verifyPhoneNumberFrmValidation,
  enterEmailAddressFrmValidation,
  verifyEmailAddressFrmValidation,
} from "@src/form/validation/rules";
import { getBtnText } from "@src/helper/utils";

export const SignUp = ({
  navigation,
}: AuthScreenProps<authScreenNames.SIGN_UP>) => {
  const { nextStep, currStep, prevStep } = useStepper(11);

  //form 1 validation control
  const {
    control: createAccFormControl,
    formState: { errors: createAcctFormErrors },
    trigger: createAcctFormTrigger,
    setValue: createAcctFormSetValue,
    getValues: createAcctFormGetValues,
    clearErrors: createAcctFormClearError,
  } = useForm<createAcctFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(createAcctFrmValidation),
  });

  //form 2 validation control
  const {
    control: verifyPhoneFormControl,
    formState: { errors: verifyPhoneFormErrors },
    trigger: verifyPhoneFormTrigger,
    setValue: verifyPhoneFormSetValue,
    getValues: verifyPhoneFormGetValues,
    clearErrors: verifyPhoneFormClearError,
  } = useForm<verifyPhoneNumberFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(verifyPhoneNumberFrmValidation),
  });

  //form 3 validation control
  const {
    control: securityPinFormControl,
    formState: { errors: securityPinFormErrors },
    trigger: securityPinFormTrigger,
    setValue: securityPinFormSetValue,
    getValues: securityPinFormGetValues,
    clearErrors: securityPinFormClearError,
  } = useForm<securityPinFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(securityPinFrmValidation),
  });

  //form 4 validation control
  const {
    control: confirmSecurityPinFormControl,
    formState: { errors: confirmSecurityPinFormErrors },
    trigger: confirmSecurityPinFormTrigger,
    setValue: confirmSecurityPinFormSetValue,
    getValues: confirmSecurityPinFormGetValues,
    clearErrors: confirmSecurityPinFormClearError,
  } = useForm<confirmSecurityPinFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(confirmSecurityPinFrmValidation),
  });

  //form 5 validation control
  const {
    control: bvnFormControl,
    formState: { errors: bvnFormErrors },
    trigger: bvnFormTrigger,
    setValue: bvnFormSetValue,
    getValues: bvnFormGetValues,
    clearErrors: bvnFormClearError,
  } = useForm<bvnFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(bvnFrmValidation),
  });

  //form 6 validation control
  const {
    control: enterEmailFormControl,
    formState: { errors: enterEmailFormErrors },
    trigger: enterEmailFormTrigger,
    setValue: enterEmailFormSetValue,
    getValues: enterEmailFormGetValues,
    clearErrors: enterEmailFormClearError,
  } = useForm<enterEmailAddressFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(enterEmailAddressFrmValidation),
  });

  //form 7 validation control
  const {
    control: verifyEmailAddressFormControl,
    formState: { errors: verifyEmailAddressFormErrors },
    trigger: verifyEmailAddressFormTrigger,
    setValue: verifyEmailAddressFormSetValue,
    getValues: verifyEmailAddressFormGetValues,
    clearErrors: verifyEmailAddressFormClearError,
  } = useForm<verifyEmailAddressFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(verifyEmailAddressFrmValidation),
  });

  const onSubmit = async () => {
    let isValid = false;
    if (currStep === 1) {
      isValid = await createAcctFormTrigger();
      if (isValid) nextStep();
    } else if (currStep === 2) {
      isValid = await verifyPhoneFormTrigger();
      if (isValid) nextStep();
    } else if (currStep === 3) {
      nextStep();
    } else if (currStep === 4) {
      isValid = await securityPinFormTrigger();
      if (isValid) nextStep();
    } else if (currStep === 5) {
      isValid = await confirmSecurityPinFormTrigger();
      if (isValid) nextStep();
    } else if (currStep === 6) {
      nextStep();
    } else if (currStep === 7) {
      isValid = await bvnFormTrigger();
      if (isValid) nextStep();
    } else if (currStep === 8) {
      nextStep();
    } else if (currStep === 9) {
      isValid = await enterEmailFormTrigger();
      if (isValid) nextStep();
    } else if (currStep === 10) {
      isValid = await verifyEmailAddressFormTrigger();
      if (isValid) nextStep();
    } else if (currStep === 11) {
      //perform specific operations here
    }
  };

  const steps = [
    <Step1
      useFormProps={{
        control: createAccFormControl,
        errors: createAcctFormErrors,
        setValue: createAcctFormSetValue,
        clearErrors: createAcctFormClearError,
      }}
    />,
    <Step2
      useFormProps={{
        control: verifyPhoneFormControl,
        errors: verifyPhoneFormErrors,
        setValue: verifyPhoneFormSetValue,
        clearErrors: verifyPhoneFormClearError,
      }}
    />,
    <Step3 />,
    <Step4
      useFormProps={{
        control: securityPinFormControl,
        errors: securityPinFormErrors,
        setValue: securityPinFormSetValue,
        clearErrors: securityPinFormClearError,
      }}
    />,
    <Step5
      useFormProps={{
        control: confirmSecurityPinFormControl,
        errors: confirmSecurityPinFormErrors,
        setValue: confirmSecurityPinFormSetValue,
        clearErrors: confirmSecurityPinFormClearError,
      }}
    />,
    <Step6 />,
    <Step7
      useFormProps={{
        control: bvnFormControl,
        errors: bvnFormErrors,
        setValue: bvnFormSetValue,
        clearErrors: bvnFormClearError,
      }}
    />,
    <Step8 />,
    <Step9
      useFormProps={{
        control: enterEmailFormControl,
        errors: enterEmailFormErrors,
        setValue: enterEmailFormSetValue,
        clearErrors: enterEmailFormClearError,
      }}
    />,
    <Step10
      useFormProps={{
        control: verifyEmailAddressFormControl,
        errors: verifyEmailAddressFormErrors,
        setValue: verifyEmailAddressFormSetValue,
        clearErrors: verifyEmailAddressFormClearError,
      }}
    />,
    <Step11 />,
  ];

  return (
    <Screen style={styles.screen} safeArea>
      {currStep === 2 ||
      currStep === 4 ||
      currStep === 5 ||
      currStep === 7 ||
      currStep === 9 ||
      currStep === 10 ? (
        <ActionHeader
          title={String(getBtnText(currStep)?.frmTitle)}
          desc={String(getBtnText(currStep)?.desc)}
          onPressBackArrow={prevStep}
        />
      ) : currStep <= 1 ? (
        <IconHeader
          title='Create an account'
          desc="Enter your phone number and we'll send an SMS with a code to verify your phone number."
          textContainerStyle={styles.textContainer}
        />
      ) : null}
      <View style={styles.mainContainer}>
        <ScrollContainer style={styles.scrollContainer}>
          {steps[currStep - 1]}
          <View style={styles.bottomActionContainer}>
            <CustomButton
              title={String(getBtnText(currStep)?.btnText)}
              blue
              textType='light'
              textWhite
              onPress={() => onSubmit()}
              buttonType='Solid'
              btnStyle={{
                width: "100%",
              }}
            />
            {currStep === 8 && (
              <CustomButton
                title='No, thank you'
                blue
                textType='medium'
                textBlue
                onPress={() => onSubmit()}
                buttonType='Outline'
                btnStyle={{
                  width: "100%",
                  marginTop: moderateScale(-12),
                  borderWidth: 0,
                }}
              />
            )}
            {currStep > 1 ? null : (
              <>
                <ActionText
                  leftText='Already have an account?'
                  actionText='Login here'
                  onPressAction={() => {}}
                />
                <CustomText type='regular' size={15} blue>
                  v2.5.501
                </CustomText>
              </>
            )}
          </View>
        </ScrollContainer>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: moderateScale(15),
  },
  textContainer: {
    paddingBottom: moderateScale(30),
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  bottomActionContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(20),
    bottom: 20,
  },
  mainContainer: {
    flex: 1,
  },
});
