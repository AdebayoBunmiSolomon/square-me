import { CustomInput, CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface IStep1Props {
  useFormProps: any;
}

export const Step1: React.FC<IStep1Props> = ({ useFormProps }) => {
  const [enteredPhNumber, setEnteredPhNumber] = useState<string>("");
  const props = useFormProps;
  return (
    <View style={styles.formContainer}>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Amount'
            titleColor={"#000000"}
            placeholder=''
            type='custom'
            keyboardType='phone-pad'
            onChangeText={(value) => field.onChange(value)}
            value={field.value}
            showErrorText
            error={props?.errors?.amount?.message}
          />
        )}
        name='amount'
        defaultValue={""}
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Enter recipient Squareme tag'
            titleColor={"#000000"}
            placeholder=''
            type='custom'
            keyboardType='default'
            onChangeText={(value) => {
              field.onChange(value);
              setEnteredPhNumber(value);
            }}
            value={field.value}
            showErrorText
            error={props?.errors?.recipient_square_me_tag?.message}
          />
        )}
        name='recipient_square_me_tag'
        defaultValue={""}
      />

      {enteredPhNumber && enteredPhNumber.length >= 10 && (
        <View style={styles.beneficiaryContainer}>
          <CustomText type='regular' size={15} black>
            {"DAVID OLAOYE"}
          </CustomText>
        </View>
      )}

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomInput
            titleType='regular'
            title='Add a note (Optional)'
            titleColor={"#000000"}
            placeholder=''
            type='custom'
            keyboardType='default'
            onChangeText={(value) => field.onChange(value)}
            value={field.value}
            showErrorText
            error={props?.errors?.note?.message}
            multiLine
            height={13}
          />
        )}
        name='note'
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
