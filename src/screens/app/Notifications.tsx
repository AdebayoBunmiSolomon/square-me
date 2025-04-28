import { ActionHeader, StatusBar } from "@src/common";
import { appScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { RootStackScreenProps } from "@src/router/types";
import { Screen } from "../Screen";
import { StyleSheet, View } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "../Scroll-Container";
import { notifications } from "@src/constants/notifications";
import { Image } from "expo-image";
import { CustomButton, CustomText } from "@src/components/shared";

export const Notifications = ({
  navigation,
}: RootStackScreenProps<appScreenNames.NOTIFICATIONS>) => {
  const parseTextWithBold = (text: string) => {
    const regex = /(\+234\d{10}|NGN\s?\d{1,3}(,\d{3})*(\.\d{2})?)/g;
    const parts = text.split(regex).filter(Boolean);

    return parts.map((part, index) => {
      const isBold = regex.test(part);
      return (
        <CustomText
          key={index}
          type={isBold ? "medium" : "regular"}
          size={14}
          style={{
            lineHeight: moderateScale(20),
          }}
          blue>
          {part}
        </CustomText>
      );
    });
  };

  return (
    <Screen style={styles.screen} safeArea>
      <StatusBar bgColor={colors.white} style='dark' />
      <ActionHeader
        onPressBackArrow={() => navigation.goBack()}
        title='Notifications'
      />
      <ScrollContainer
        style={{
          paddingBottom: moderateScale(40),
        }}>
        {notifications &&
          notifications.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={require("@src/assets/png/notification-icon.png")}
                  contentFit='cover'
                  style={styles.icon}
                />
              </View>
              <View style={styles.item}>
                <View style={styles.titleContainer}>
                  <CustomText type='regular' size={13} blue>
                    {item?.title}
                  </CustomText>
                  <CustomText
                    type='regular'
                    size={13}
                    style={{ color: "#4C525E" }}>
                    {item?.time}
                  </CustomText>
                </View>
                <View style={{ width: "100%" }}>
                  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {parseTextWithBold(item?.desc)}
                  </View>
                  {item?.request && (
                    <View style={styles.actionBtnContainer}>
                      <CustomButton
                        title='Accept'
                        textType='regular'
                        blue
                        textWhite
                        btnStyle={{
                          width: "47%",
                          paddingVertical: moderateScale(15),
                        }}
                        buttonType='Solid'
                        onPress={() => {}}
                      />
                      <CustomButton
                        title='Reject'
                        textType='regular'
                        textBlue
                        btnStyle={{
                          width: "47%",
                          paddingVertical: moderateScale(15),
                        }}
                        buttonType='Outline'
                        onPress={() => {}}
                      />
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}
      </ScrollContainer>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: moderateScale(15),
  },
  iconContainer: {
    width: DVW(11),
    height: DVH(5.5),
    overflow: "hidden",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
  item: {
    gap: moderateScale(6),
    width: "85%",
    overflow: "hidden",
  },
  actionBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: moderateScale(20),
  },
});
