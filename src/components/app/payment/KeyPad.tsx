import { CustomText } from "@src/components/shared";
import { formatAmountWithCommas } from "@src/helper/utils";
import { colors } from "@src/resources/color/color";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "del"];

interface ISendMoney1Props {
  onEnterAmt: (amt: string) => void;
}

export const KeyPad: React.FC<ISendMoney1Props> = ({ onEnterAmt }) => {
  const [amt, setAmt] = useState<string>(""); // Store as string

  const handleKeyPress = (key: string | number) => {
    if (key === "del") {
      setAmt((prev) => {
        const updated = prev.slice(0, -1);
        onEnterAmt(updated);
        return updated;
      });
    } else if (key === ".") {
      if (!amt.includes(".")) {
        const updated = amt + key;
        setAmt(updated);
        onEnterAmt(updated);
      }
    } else if (typeof key === "number") {
      const updated = amt + key.toString();
      setAmt(updated);
      onEnterAmt(updated);
    }
  };

  return (
    <>
      <View style={styles.entryAmtContainer}>
        <CustomText type='medium' size={15} white>
          ₦
        </CustomText>
        <CustomText type='regular' size={50} white>
          {amt ? formatAmountWithCommas(Number(amt)) : "0"}
        </CustomText>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: moderateScale(10),
          marginTop: moderateScale(0),
        }}>
        <FlatList
          data={dialPad}
          scrollEnabled={false}
          numColumns={3}
          keyExtractor={(_, index) => index.toString()}
          columnWrapperStyle={{ gap: moderateScale(30) }}
          contentContainerStyle={{ gap: moderateScale(15) }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleKeyPress(item)}
              style={styles.codeBtn}>
              {item === "del" ? (
                <ChevronLeft size={moderateScale(25)} color={colors.white} />
              ) : (
                <CustomText type='regular' size={20} white>
                  {item}
                </CustomText>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  codeBtn: {
    width: DVW(20),
    height: DVW(20),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: DVW(20) / 2,
  },
  entryAmtContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(5),
  },
});
