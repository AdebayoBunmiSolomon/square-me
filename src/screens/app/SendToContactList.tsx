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
  sendToContactListFrm1Types,
  sendToContactListFrm3Types,
} from "@src/form/schema/types";
import {
  sendToContactListFrm1Validation,
  sendToContactListFrm3Validation,
} from "@src/form/validation/rules";
import {
  Step1,
  Step2,
  Step3,
  Step4,
} from "@src/components/app/send-money/send-to-contact-list";
import { ScrollContainer } from "../Scroll-Container";
import { CustomButton } from "@src/components/shared";

export const SendToContactList = ({
  navigation,
}: RootStackScreenProps<appScreenNames.SEND_TO_CONTACT_LIST>) => {
  const { nextStep, currStep, prevStep } = useStepper(4);

  //form 1 validation control
  const {
    control: form1Control,
    formState: { errors: form1Errors },
    trigger: form1Trigger,
    setValue: form1SetValue,
    getValues: form1GetValues,
    clearErrors: form1ClearError,
  } = useForm<sendToContactListFrm1Types>({
    mode: "onChange",
    resolver: yupResolver(sendToContactListFrm1Validation),
  });

  //form 3 validation control
  const {
    control: form3Control,
    formState: { errors: form3Errors },
    trigger: form3Trigger,
    setValue: form3SetValue,
    getValues: form3GetValues,
    clearErrors: form3ClearError,
  } = useForm<sendToContactListFrm3Types>({
    mode: "onChange",
    resolver: yupResolver(sendToContactListFrm3Validation),
  });

  const onSubmit = async () => {
    let isValid = false;
    if (currStep === 1) {
      isValid = await form1Trigger();
      if (isValid) nextStep();
    } else if (currStep === 2) {
      nextStep();
    } else if (currStep === 3) {
      isValid = await form3Trigger();
      if (isValid) nextStep();
    } else if (currStep === 4) {
      navigation.goBack();
    }
  };

  const steps = [
    <Step1
      useFormProps={{
        control: form1Control,
        errors: form1Errors,
        setValue: form1SetValue,
        clearErrors: form1ClearError,
      }}
    />,
    <Step2 />,
    <Step3
      useFormProps={{
        control: form3Control,
        errors: form3Errors,
        setValue: form3SetValue,
        clearErrors: form3ClearError,
      }}
    />,
    <Step4 />,
  ];

  return (
    <Screen safeArea style={styles.screen}>
      <StatusBar bgColor={colors.white} style='dark' />
      {currStep !== 4 && (
        <ActionHeader
          title={
            currStep === 1
              ? "Send"
              : currStep === 2
              ? "Confirm Transaction"
              : currStep === 3
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
            currStep === 2
              ? "Please confirm the details before you proceed as your money cannot be reversed once processed"
              : currStep === 3
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
                flexDirection: currStep === 2 ? "row" : "column",
                justifyContent: currStep === 2 ? "space-between" : "center",
                alignItems: currStep === 2 ? "center" : "center",
              },
            ]}>
            {currStep === 2 && (
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
            <CustomButton
              title={
                currStep === 4
                  ? "Done"
                  : currStep === 2
                  ? "Confirm"
                  : "Send Money"
              }
              blue
              textType='light'
              textWhite
              onPress={() => onSubmit()}
              buttonType='Solid'
              btnStyle={{
                width: currStep === 2 ? "47%" : "100%",
              }}
            />
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
