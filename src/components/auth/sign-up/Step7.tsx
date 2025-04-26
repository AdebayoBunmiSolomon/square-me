import { CustomButton, CustomInput, CustomText } from "@src/components/shared";
import { whyBVN } from "@src/constants/whyBvn";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";
import {
  ChevronDown,
  ChevronUp,
  Dot,
  Plus,
  ShieldCheck,
} from "lucide-react-native";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface IBvnFrmProps {
  useFormProps: any;
}

export const Step7: React.FC<IBvnFrmProps> = ({ useFormProps }) => {
  const props = useFormProps;
  const [showInput, setShowInput] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <View style={styles.formContainer}>
      <CustomText
        type='regular'
        size={14}
        black
        style={{
          paddingVertical: moderateScale(5),
        }}>
        BVN
      </CustomText>
      <CustomButton
        title='Click to add'
        gray
        textType='light'
        textSize={14}
        buttonType='Solid'
        onPress={() => setShowInput(!showInput)}
        btnStyle={styles.btn}
        leftIcon={<Plus color={"#93979E"} size={moderateScale(17)} />}
        textStyle={styles.btnTextStyle}
      />
      {props?.errors?.bvn?.message && (
        <CustomText
          size={12}
          type='regular'
          danger
          style={{
            marginTop: moderateScale(5),
          }}>
          {props?.errors?.bvn?.message}
        </CustomText>
      )}

      {showInput && (
        <Controller
          control={props?.control}
          render={({ field }) => (
            <CustomInput
              titleType='regular'
              titleColor={"#000000"}
              placeholder='Enter BVN'
              type='custom'
              keyboardType='default'
              onChangeText={(value) => field.onChange(value)}
              value={field.value}
              style={styles.input}
              showErrorText
              error={props?.errors?.bvn?.message}
            />
          )}
          name='bvn'
          defaultValue={""}
        />
      )}
      <View style={styles.cta}>
        <View style={styles.ctaActionContainer}>
          <View style={styles.ctaActionTitle}>
            <ShieldCheck color={colors.lightPurple} size={moderateScale(20)} />
            <CustomText type='medium' size={14} lightPurple>
              Why we need your BVN?
            </CustomText>
          </View>
          <TouchableOpacity
            style={styles.ctaActionBtn}
            onPress={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <ChevronDown
                size={moderateScale(20)}
                color={colors.lightPurple}
              />
            ) : (
              <ChevronUp size={moderateScale(20)} color={colors.lightPurple} />
            )}
          </TouchableOpacity>
        </View>
        {!collapsed && (
          <View style={styles.ctaListContainer}>
            {whyBVN &&
              whyBVN.map((item, index) => (
                <View style={styles.ctaList} key={index}>
                  <Dot size={moderateScale(17)} color={colors.black} />
                  <CustomText type='regular' size={13} blue>
                    {item}
                  </CustomText>
                </View>
              ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: moderateScale(20),
  },
  btn: {
    width: "100%",
  },
  btnTextStyle: {
    color: "#93979E",
  },
  input: {
    marginTop: moderateScale(20),
  },
  cta: {
    backgroundColor: "#F6EFFB",
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(8),
    marginVertical: moderateScale(30),
  },
  ctaActionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ctaActionTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  ctaActionBtn: {
    padding: moderateScale(5),
  },
  ctaList: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: moderateScale(7),
  },
  ctaListContainer: {
    maxWidth: "95%",
    paddingVertical: moderateScale(5),
    gap: moderateScale(10),
  },
});
