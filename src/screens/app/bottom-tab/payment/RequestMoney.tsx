import { StatusBar } from "@src/common";
import { BottomSheet } from "@src/common/BottomSheet";
import { useBottomSheet } from "@src/common/hooks";
import { KeyPad } from "@src/components/app/payment";
import { CustomButton, CustomText } from "@src/components/shared";
import {
  requestMoneyOptions,
  sendMoneyOptions,
} from "@src/constants/send-money";
import { appScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { RootStackScreenProps } from "@src/router/types";
import { Screen } from "@src/screens/Screen";
import { ChevronDown } from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";

export const RequestMoney =
  ({}: RootStackScreenProps<appScreenNames.REQUEST_MONEY>) => {
    const [enteredAmt, setEnteredAmt] = useState<any>("");
    const { modalRef, showModal, hideModal } = useBottomSheet();
    return (
      <>
        <Screen safeArea style={styles.screen}>
          <StatusBar style='light' bgColor={"#0C0C26"} />
          <View style={styles.acctBalCard}>
            <CustomText type='regular' size={15} white>
              Wallet Balance
            </CustomText>
            <CustomText type='medium' size={20} white>
              ₦5,200
            </CustomText>
          </View>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => showModal()}>
            <CustomText type='regular' size={13} white>
              Where do you want to request from?
            </CustomText>
            <ChevronDown size={moderateScale(20)} color={colors.white} />
          </TouchableOpacity>
          <KeyPad onEnterAmt={(amt) => setEnteredAmt(amt)} />
          <View style={styles.bottomButtonContainer}>
            <CustomButton
              title='Proceed'
              buttonType='Solid'
              textType='regular'
              textWhite
              textSize={15}
              onPress={() => {
                if (enteredAmt && Number(enteredAmt) > 0) {
                  console.log("Proceeding with amount: ", enteredAmt);
                }
              }}
              btnStyle={{
                backgroundColor: "#4C525E",
                width: "100%",
              }}
            />
          </View>
        </Screen>
        <BottomSheet
          title='Where do you want to request from?'
          modalRef={modalRef}
          onHideModal={() => hideModal()}
          maxHeight={35}>
          <View
            style={{
              paddingTop: moderateScale(20),
            }}>
            {requestMoneyOptions &&
              requestMoneyOptions.map((item, index) => (
                <TouchableOpacity style={styles.imgContainer} key={index}>
                  <Image
                    source={item}
                    contentFit='contain'
                    style={styles.img}
                  />
                </TouchableOpacity>
              ))}
          </View>
        </BottomSheet>
      </>
    );
  };

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: moderateScale(15),
    backgroundColor: "#0C0C26",
  },
  actionBtn: {
    backgroundColor: "#38225A",
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(17),
    borderRadius: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: moderateScale(20),
  },
  acctBalCard: {
    backgroundColor: "#9F56D41A",
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(10),
  },
  bottomButtonContainer: {
    width: "100%",
    alignSelf: "center",
    position: "absolute",
    bottom: moderateScale(20),
  },
  imgContainer: {
    width: "100%",
    height: DVH(7),
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
