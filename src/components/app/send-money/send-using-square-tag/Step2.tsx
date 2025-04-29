import { CustomInput, CustomText } from "@src/components/shared";
import { formatUsername } from "@src/helper/utils";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface IStep1Props {
  useFormProps: any;
}

export const Step2: React.FC<IStep1Props> = ({ useFormProps }) => {
  const [enteredBeneficiary, setEnteredBeneficiary] = useState<string>("");
  const props = useFormProps;
  return (
    <View style={styles.formContainer}>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Enter beneficiary Squareme tag'
            titleColor={"#000000"}
            placeholder='@'
            type='custom'
            keyboardType='default'
            onChangeText={(value) => {
              const formattedValue = value.startsWith("@ ")
                ? value
                : `@ ${value}`;
              field.onChange(formattedValue);
              setEnteredBeneficiary(formatUsername(formattedValue));
            }}
            value={field.value}
            showErrorText
            error={props?.errors?.beneficiary?.message}
          />
        )}
        name='beneficiary'
        defaultValue={""}
      />

      {enteredBeneficiary && (
        <View style={styles.beneficiaryContainer}>
          <CustomText type='regular' size={15} black>
            {enteredBeneficiary}
          </CustomText>
        </View>
      )}

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Purpose for sending (Optional)'
            titleColor={"#000000"}
            placeholder=''
            type='custom'
            keyboardType='default'
            onChangeText={(value) => field.onChange(value)}
            value={field.value}
            showErrorText
            error={props?.errors?.purpose?.message}
          />
        )}
        name='purpose'
        defaultValue={""}
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Amount'
            titleColor={"#000000"}
            placeholder='₦'
            type='custom'
            keyboardType='phone-pad'
            onChangeText={(value) => {
              const formattedValue = value.startsWith("₦ ")
                ? value
                : `₦ ${value}`;
              field.onChange(formattedValue);
            }}
            value={field.value}
            showErrorText
            error={props?.errors?.amount?.message}
          />
        )}
        name='amount'
        defaultValue={""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: moderateScale(20),
  },
  beneficiaryContainer: {
    backgroundColor: "#ECFDF3",
    borderRadius: moderateScale(10),
    borderWidth: DVW(0.3),
    borderColor: "#12B76A",
    paddingVertical: moderateScale(13),
    paddingHorizontal: moderateScale(13),
  },
});
