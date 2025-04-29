import { StatusBar } from "@src/common";
import { CustomText } from "@src/components/shared";
import { appScreenNames, bottomTabScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { BottomTabBarScreenProps, RootStackParamList } from "@src/router/types";
import { Screen } from "@src/screens/Screen";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { more } from "@src/constants/more";
import { MoreModal } from "@src/components/app/more";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export const More =
  ({}: BottomTabBarScreenProps<bottomTabScreenNames.MORE>) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
      <>
        <Screen style={styles.screen} safeArea>
          <StatusBar style='dark' bgColor={colors.white} />
          <CustomText type='medium' size={20} blue>
            More
          </CustomText>
          <View style={styles.itemContainer}>
            {more &&
              more.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.moreIconBtn}
                  onPress={() => {
                    if (index === 4) {
                      setShowModal(!showModal);
                    } else {
                      navigation.navigate(appScreenNames.BILL_PAYMENT);
                    }
                  }}>
                  <View style={styles.moreIconContainer}>
                    <Image
                      source={item.icon}
                      contentFit='contain'
                      style={styles.moreIcon}
                    />
                  </View>
                  <View
                    style={{
                      gap: moderateScale(5),
                    }}>
                    <CustomText type='medium' size={15} blue>
                      {item?.title}
                    </CustomText>
                    <CustomText
                      type='regular'
                      size={14}
                      blue
                      style={{
                        maxWidth: DVW(75),
                      }}>
                      {item?.desc}
                    </CustomText>
                  </View>
                </TouchableOpacity>
              ))}
          </View>
          <MoreModal
            visible={showModal}
            onCloseModal={() => setShowModal(!showModal)}
          />
        </Screen>
      </>
    );
  };

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: moderateScale(15),
  },
  itemContainer: {
    marginTop: moderateScale(20),
  },
  moreIconContainer: {
    width: DVW(15),
    height: DVH(7.5),
    overflow: "hidden",
  },
  moreIcon: {
    width: "100%",
    height: "100%",
  },
  moreIconBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(15),
    paddingVertical: moderateScale(15),
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#deefef",
  },
});
