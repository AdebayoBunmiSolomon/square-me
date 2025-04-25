import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ColorValue,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  TextStyle,
} from "react-native";
import { CustomText } from "../text/CustomText";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { fontFamily } from "@src/resources/fonts/font-family";
import { textType } from "../text/CustomText";
import { countriesDialCode } from "@src/constants/countries";
import { useCustomInput } from "../hooks";

interface ICustomPhoneInputProps {
  dial_code?: string;
  number?: string;
  flag?: string;
  disabled?: boolean;
  multiLine?: boolean;
  maxLength?: number;
  placeholder: string;
  title?: string;
  titleType?: textType;
  titleColor?: ColorValue;
  value?: any;
  onChangeText: (value: any) => void;
  error?: string;
  showErrorText?: boolean;
  style?: StyleProp<ViewStyle>;
  valueFontType?: textType;
  titleStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  onSubmitEditing?: () => void;
}

type SelectedCountryType = {
  name: string;
  dial_code: string;
  flag: string;
};

export const CustomPhoneInput: React.FC<ICustomPhoneInputProps> = ({
  dial_code,
  number,
  flag,
  disabled,
  multiLine,
  maxLength,
  placeholder,
  title,
  titleType,
  titleColor,
  value,
  onChangeText,
  error,
  showErrorText,
  style,
  valueFontType,
  titleStyle,
  inputStyle,
  onSubmitEditing,
}) => {
  const { getValueFontType } = useCustomInput();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedCountry, setSelectedCountry] = useState<SelectedCountryType>({
    name: countriesDialCode[0].name,
    flag: countriesDialCode[0].flag,
    dial_code: countriesDialCode[0].dialCode,
  });

  const getBorderColor = () => (error ? colors.danger : "#d3cacaf5");
  const valueFont = getValueFontType(valueFontType || "regular");

  return (
    <>
      <View style={styles.container}>
        <CustomText
          size={14}
          type={titleType ? titleType : "medium"}
          style={[
            {
              color: titleColor,
            },
            styles.title,
            titleStyle,
          ]}>
          {title ? title : "Phone number"}
        </CustomText>
        <View
          style={[
            styles.inputWrapper,
            { borderColor: getBorderColor() },
            style,
          ]}>
          <TouchableOpacity
            disabled={disabled}
            onPress={() => setModalVisible(!modalVisible)}
            style={[styles.flagBtn, style]}>
            <CustomText
              type='semi-bold'
              size={20}
              style={{
                borderRadius: moderateScale(100),
                overflow: "hidden",
              }}>
              {flag || selectedCountry.flag}
            </CustomText>
          </TouchableOpacity>
          <CustomText
            type={"regular"}
            size={14}
            black
            style={{
              paddingHorizontal: moderateScale(5),
            }}>
            {dial_code || selectedCountry.dial_code}
          </CustomText>
          <TextInput
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            value={`${value}`}
            onChangeText={(text) => {
              onChangeText(text);
            }}
            style={[
              {
                width: "70%",
                height: "100%",
                textAlignVertical: multiLine ? "top" : "center",
                fontFamily: valueFont,
                backgroundColor: "transparent",
              },
              inputStyle,
            ]}
            keyboardType={"phone-pad"}
            placeholderTextColor={colors.black}
            maxLength={maxLength}
            editable={disabled ? false : true}
            multiline={multiLine}
          />
        </View>
        {showErrorText && error && (
          <CustomText size={12} type='regular' style={styles.errorText}>
            {error}
          </CustomText>
        )}
      </View>
      <Modal
        visible={modalVisible}
        transparent
        animationType='fade'
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <CustomText size={16} type='semi-bold' style={styles.modalHeader}>
              Select an Option
            </CustomText>
            <FlatList
              data={countriesDialCode}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    setSelectedCountry({
                      ...selectedCountry,
                      flag: item?.flag,
                      dial_code: item?.dialCode,
                      name: item?.name,
                    });
                    setModalVisible(false);
                  }}>
                  <CustomText size={14} type='regular'>
                    {item.flag} {item.name}
                  </CustomText>
                  <CustomText size={14} type='regular'>
                    {item.dialCode}
                  </CustomText>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}>
              <CustomText
                size={14}
                type='bold'
                style={{
                  color: colors.danger,
                }}>
                Close
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(5),
  },
  title: {
    color: "#484848",
  },
  inputWrapper: {
    height: DVH(7),
    borderWidth: DVW(0.2),
    backgroundColor: "#F3F4F7",
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
  phoneInput: {
    flex: 1,
    height: "100%",
  },
  phoneInputText: {
    fontFamily: fontFamily.regular,
    fontSize: moderateScale(14),
    color: colors.black,
  },
  flagStyle: {
    marginHorizontal: moderateScale(10),
    width: DVW(10),
    height: DVH(3),
  },
  errorText: {
    color: colors.danger,
    marginTop: moderateScale(5),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    height: "40%",
    backgroundColor: "white",
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
  },
  modalHeader: {
    marginBottom: moderateScale(10),
    textAlign: "center",
  },
  option: {
    paddingVertical: moderateScale(10),
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flag: {
    marginRight: moderateScale(10),
  },
  closeButton: {
    marginTop: moderateScale(10),
    alignSelf: "center",
    padding: moderateScale(5),
  },
  flagBtn: {
    backgroundColor: "transparent",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
  },
});
