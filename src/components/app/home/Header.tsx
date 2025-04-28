import { CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/router/types";
import { appScreenNames } from "@src/navigation";

export const HomeHeader: React.FC<{}> = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.userIconContainer}>
        <TouchableOpacity style={styles.userBtn}>
          <Image
            source={require("@src/assets/png/home/user-pic.png")}
            contentFit='fill'
            style={styles.userIcon}
          />
        </TouchableOpacity>
        <CustomText type='regular' size={15} black>
          Hi David,
        </CustomText>
      </View>
      <View style={styles.actionIconContainer}>
        <TouchableOpacity style={styles.actionBtnIcon}>
          <Image
            source={require("@src/assets/png/home/gift.png")}
            contentFit='contain'
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtnIcon}>
          <Image
            source={require("@src/assets/png/home/add.png")}
            contentFit='contain'
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(appScreenNames.NOTIFICATIONS)}
          style={[
            styles.actionBtnIcon,
            {
              marginLeft: moderateScale(10),
            },
          ]}>
          <Image
            source={require("@src/assets/png/home/notification.png")}
            contentFit='contain'
            style={styles.actionIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userBtn: {
    width: DVW(10),
    height: DVH(5),
    overflow: "hidden",
  },
  userIcon: {
    width: "100%",
    height: "100%",
  },
  userIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
  actionBtnIcon: {
    width: DVW(6),
    height: DVH(3),
    overflow: "hidden",
  },
  actionIcon: {
    width: "100%",
    height: "100%",
  },
  actionIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(5),
  },
});
