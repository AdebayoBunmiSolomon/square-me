import { authScreenNames } from "@src/navigation";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { Screen } from "../Screen";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "../Scroll-Container";
import { ActionHeader, ActionText, IconHeader } from "@src/common";
import { CustomButton } from "@src/components/shared";
import { useStepper } from "@src/hooks/services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { fpGetBtnText } from "@src/helper/utils";
import {
  FpConfirmPinFrmTypes,
  FpCreatePinFrmTypes,
  FpEnterPhoneNumberFrmTypes,
  FpVerifyPhoneNumberFrmTypes,
} from "@src/form/schema/types";
import {
  FpConfirmPinFrmValidation,
  FpCreatePinFrmValidation,
  FpEnterPhoneNumberFrmValidation,
  FpVerifyPhoneNumberFrmValidation,
} from "@src/form/validation/rules";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
} from "@src/components/auth/forgot-password";

export const ForgotPassword = ({
  navigation,
}: AuthScreenProps<authScreenNames.FORGOT_PASSWORD>) => {
  const { nextStep, currStep, prevStep } = useStepper(5);

  //form 1 validation control
  const {
    control: fpEnterPhoneNumberFormControl,
    formState: { errors: fpEnterPhoneNumberFormErrors },
    trigger: fpEnterPhoneNumberFormTrigger,
    setValue: fpEnterPhoneNumberFormSetValue,
    getValues: fpEnterPhoneNumberFormGetValues,
    clearErrors: fpEnterPhoneNumberFormClearError,
  } = useForm<FpEnterPhoneNumberFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(FpEnterPhoneNumberFrmValidation),
  });

  //form 2 validation control
  const {
    control: fpVerifyPhoneFormControl,
    formState: { errors: fpVerifyPhoneFormErrors },
    trigger: fpVerifyPhoneFormTrigger,
    setValue: fpVerifyPhoneFormSetValue,
    getValues: fpVerifyPhoneFormGetValues,
    clearErrors: fpVerifyPhoneFormClearError,
  } = useForm<FpVerifyPhoneNumberFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(FpVerifyPhoneNumberFrmValidation),
  });

  //form 3 validation control
  const {
    control: fpCreatePinFormControl,
    formState: { errors: fpCreatePinFormErrors },
    trigger: fpCreatePinFormTrigger,
    setValue: fpCreatePinFormSetValue,
    getValues: fpCreatePinFormGetValues,
    clearErrors: fpCreatePinFormClearError,
  } = useForm<FpCreatePinFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(FpCreatePinFrmValidation),
  });

  //form 4 validation control
  const {
    control: fpConfirmPinFormControl,
    formState: { errors: fpConfirmPinFormErrors },
    trigger: fpConfirmPinFormTrigger,
    setValue: fpConfirmPinFormSetValue,
    getValues: fpConfirmPinFormGetValues,
    clearErrors: fpConfirmPinFormClearError,
  } = useForm<FpConfirmPinFrmTypes>({
    mode: "onChange",
    resolver: yupResolver(FpConfirmPinFrmValidation),
  });

  const onSubmit = async () => {
    let isValid = false;
    if (currStep === 1) {
      isValid = await fpEnterPhoneNumberFormTrigger();
      if (isValid) nextStep();
    } else if (currStep === 2) {
      isValid = await fpVerifyPhoneFormTrigger();
      if (isValid) nextStep();
    } else if (currStep === 3) {
      isValid = await fpCreatePinFormTrigger();
      if (isValid) nextStep();
    } else if (currStep === 4) {
      isValid = await fpConfirmPinFormTrigger();
      if (isValid) nextStep();
    } else if (currStep === 5) {
      navigation.navigate(authScreenNames.LOGIN);
    }
  };

  const steps = [
    <Step1
      useFormProps={{
        control: fpEnterPhoneNumberFormControl,
        errors: fpEnterPhoneNumberFormErrors,
        setValue: fpEnterPhoneNumberFormSetValue,
        clearErrors: fpEnterPhoneNumberFormClearError,
      }}
    />,
    <Step2
      useFormProps={{
        control: fpVerifyPhoneFormControl,
        errors: fpVerifyPhoneFormErrors,
        setValue: fpVerifyPhoneFormSetValue,
        clearErrors: fpVerifyPhoneFormClearError,
      }}
    />,
    <Step3
      useFormProps={{
        control: fpCreatePinFormControl,
        errors: fpCreatePinFormErrors,
        setValue: fpCreatePinFormSetValue,
        clearErrors: fpCreatePinFormClearError,
      }}
    />,
    <Step4
      useFormProps={{
        control: fpConfirmPinFormControl,
        errors: fpConfirmPinFormErrors,
        setValue: fpConfirmPinFormSetValue,
        clearErrors: fpConfirmPinFormClearError,
      }}
    />,
    <Step5 />,
  ];

  return (
    <Screen style={styles.screen} safeArea>
      {currStep === 2 || currStep === 3 || currStep === 4 ? (
        <ActionHeader
          title={String(fpGetBtnText(currStep)?.frmTitle)}
          desc={String(fpGetBtnText(currStep)?.desc)}
          onPressBackArrow={prevStep}
        />
      ) : currStep <= 1 ? (
        <IconHeader
          title='Forgot PIN'
          desc="Enter your phone number and we'll send an SMS with a code to verify your phone number."
          textContainerStyle={styles.textContainer}
        />
      ) : null}
      <View style={styles.mainContainer}>
        <ScrollContainer style={styles.scrollContainer}>
          {steps[currStep - 1]}
          <View
            style={[
              styles.bottomActionContainer,
              {
                justifyContent: currStep === 2 ? "space-between" : "center",
                alignItems: "center",
                flexDirection: currStep === 2 ? "row" : "column",
              },
            ]}>
            {currStep === 2 && (
              <CustomButton
                title={"Phone Call"}
                blue
                textType='regular'
                textBlue
                onPress={() => onSubmit()}
                buttonType='Outline'
                btnStyle={{
                  width: "45%",
                }}
              />
            )}
            <CustomButton
              title={String(fpGetBtnText(currStep)?.btnText)}
              blue
              textType='light'
              textWhite
              onPress={() => onSubmit()}
              buttonType='Solid'
              btnStyle={{
                width: currStep === 2 ? "45%" : "100%",
              }}
            />
            {currStep > 1 ? null : (
              <>
                <ActionText
                  leftText='Already have an account?'
                  actionText='Login here'
                  onPressAction={() =>
                    navigation.navigate(authScreenNames.LOGIN)
                  }
                />
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
    alignItems: "center",
    gap: moderateScale(20),
    bottom: 20,
  },
  mainContainer: {
    flex: 1,
  },
});
