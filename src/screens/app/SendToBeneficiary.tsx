import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React from "react";
import { Screen } from "../Screen";
import { StyleSheet, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";
import { ActionHeader, StatusBar } from "@src/common";
import { useStepper } from "@src/hooks/services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  sendToToBeneficiaryFrm2Types,
  sendToToBeneficiaryFrm4Types,
} from "@src/form/schema/types";
import {
  sendToToBeneficiaryFrm2Validation,
  sendToToBeneficiaryFrm4Validation,
} from "@src/form/validation/rules";
import { ScrollContainer } from "../Scroll-Container";
import { CustomButton } from "@src/components/shared";
import {
  Step1,
  Step3,
  Step4,
  Step5,
} from "@src/components/app/send-money/send-to-beneficiary";
import { Step2 } from "@src/components/app/send-money/send-to-beneficiary/Step2";

export const SendToBeneficiary = ({
  navigation,
}: RootStackScreenProps<appScreenNames.SEND_TO_BENEFICIARY>) => {
  const { nextStep, currStep, prevStep } = useStepper(5);

  //form 2 validation control
  const {
    control: form2Control,
    formState: { errors: form2Errors },
    trigger: form2Trigger,
    setValue: form2SetValue,
    getValues: form2GetValues,
    clearErrors: form2ClearError,
  } = useForm<sendToToBeneficiaryFrm2Types>({
    mode: "onChange",
    resolver: yupResolver(sendToToBeneficiaryFrm2Validation),
  });

  //form 4 validation control
  const {
    control: form4Control,
    formState: { errors: form4Errors },
    trigger: form4Trigger,
    setValue: form4SetValue,
    getValues: form4GetValues,
    clearErrors: form4ClearError,
  } = useForm<sendToToBeneficiaryFrm4Types>({
    mode: "onChange",
    resolver: yupResolver(sendToToBeneficiaryFrm4Validation),
  });

  const onSubmit = async () => {
    let isValid = false;
    if (currStep === 1) {
      nextStep();
    } else if (currStep === 2) {
      isValid = await form2Trigger();
      if (isValid) nextStep();
    } else if (currStep === 3) {
      nextStep();
    } else if (currStep === 4) {
      isValid = await form4Trigger();
      if (isValid) nextStep();
    } else if (currStep === 5) {
      navigation.goBack();
    }
  };

  const steps = [
    <Step1 onClick={() => onSubmit()} />,
    <Step2
      useFormProps={{
        control: form2Control,
        errors: form2Errors,
        setValue: form2SetValue,
        clearErrors: form2ClearError,
      }}
    />,
    <Step3 />,
    <Step4
      useFormProps={{
        control: form4Control,
        errors: form4Errors,
        setValue: form4SetValue,
        clearErrors: form4ClearError,
      }}
    />,
    <Step5 />,
  ];

  return (
    <Screen safeArea style={styles.screen}>
      <StatusBar bgColor={colors.white} style='dark' />
      {currStep !== 5 && (
        <ActionHeader
          title={
            currStep === 1
              ? "Beneficiaries"
              : currStep === 2
              ? "Send"
              : currStep === 3
              ? "Confirm Transaction"
              : currStep === 4
              ? "Enter your Security PIN"
              : undefined
          }
          onPressBackArrow={() => {
            if (currStep > 1) {
              prevStep();
            } else {
              navigation.goBack();
            }
          }}
          desc={
            currStep === 3
              ? "Please confirm the details before you proceed as your money cannot be reversed once processed"
              : currStep === 4
              ? "Enter your PIN to continue. Do not share your PIN with anyone"
              : undefined
          }
        />
      )}
      <View style={styles.mainContainer}>
        <ScrollContainer style={styles.scrollContainer}>
          {steps[currStep - 1]}
          <View
            style={[
              styles.bottomActionContainer,
              {
                flexDirection: currStep === 3 ? "row" : "column",
                justifyContent: currStep === 3 ? "space-between" : "center",
                alignItems: currStep === 3 ? "center" : "center",
              },
            ]}>
            {currStep === 3 && (
              <CustomButton
                title={"Cancel"}
                textType='regular'
                textBlue
                onPress={() => prevStep()}
                buttonType='Outline'
                btnStyle={{
                  width: "47%",
                }}
              />
            )}
            {currStep === 1 ? null : (
              <CustomButton
                title={
                  currStep === 5
                    ? "Done"
                    : currStep === 3
                    ? "Confirm"
                    : "Send Money"
                }
                blue
                textType='light'
                textWhite
                onPress={() => onSubmit()}
                buttonType='Solid'
                btnStyle={{
                  width: currStep === 3 ? "47%" : "100%",
                }}
              />
            )}
          </View>
        </ScrollContainer>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(15),
  },
  mainContainer: {
    flex: 1,
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
});
