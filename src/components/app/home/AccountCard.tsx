import { CustomText } from "@src/components/shared";
import { formatAmountWithCommas } from "@src/helper/utils";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";
import { ChevronRight, Copy, Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export const AccountCard: React.FC<{}> = () => {
  const [showAcctBal, setShowAcctBal] = useState<boolean>(false);
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.transHistory}>
        <CustomText type='regular' size={12} white>
          Transaction History
        </CustomText>
        <ChevronRight color={colors.white} size={moderateScale(15)} />
      </TouchableOpacity>
      <View style={styles.walletBalContainer}>
        <CustomText type='regular' size={12} white>
          Wallet Balance
        </CustomText>
        <TouchableOpacity
          style={styles.eyeBtn}
          onPress={() => setShowAcctBal(!showAcctBal)}>
          {!showAcctBal ? (
            <EyeOff color={colors.white} size={moderateScale(15)} />
          ) : (
            <Eye color={colors.white} size={moderateScale(15)} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.acctBalContainer}>
        <CustomText type='medium' size={20} white>
          {!showAcctBal ? `NGN ${formatAmountWithCommas(500000)}.00` : "******"}
        </CustomText>
      </View>
      <View style={styles.tagContainer}>
        <CustomText type='regular' size={12} white>
          Squareme tag: @davidoloye22
        </CustomText>
        <TouchableOpacity>
          <Copy size={moderateScale(17)} color={"#9F56D4"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: moderateScale(10),
    backgroundColor: colors.blue,
    borderRadius: moderateScale(15),
    marginTop: moderateScale(20),
    marginBottom: moderateScale(40),
  },
  transHistory: {
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(50),
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
    backgroundColor: "#000942",
    alignSelf: "flex-end",
  },
  eyeBtn: {
    padding: moderateScale(5),
  },
  walletBalContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(2),
    justifyContent: "center",
    paddingTop: moderateScale(20),
  },
  acctBalContainer: {
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: moderateScale(7),
    paddingBottom: moderateScale(25),
  },
  tagContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: moderateScale(5),
    gap: moderateScale(7),
  },
});
