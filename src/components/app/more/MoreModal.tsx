import { CustomText } from "@src/components/shared";
import { more } from "@src/constants/more";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { CircleX } from "lucide-react-native";
import React from "react";
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";

interface IMoreModalProps {
  visible: boolean;
  onCloseModal: () => void;
}

export const MoreModal: React.FC<IMoreModalProps> = ({
  visible,
  onCloseModal,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType='slide'
      onRequestClose={onCloseModal}
      statusBarTranslucent>
      <TouchableWithoutFeedback onPress={onCloseModal}>
        <View style={styles.modalBackground} />
      </TouchableWithoutFeedback>

      <View style={styles.modalContainer}>
        <TouchableOpacity
          onPress={() => onCloseModal()}
          style={{
            paddingBottom: moderateScale(20),
          }}>
          <CircleX size={moderateScale(20)} color={colors.black} />
        </TouchableOpacity>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: moderateScale(20),
          }}>
          <View>
            {more &&
              more[0].service.map((item, index) => (
                <View key={index}>
                  <View
                    style={{
                      paddingTop: moderateScale(20),
                      paddingBottom: moderateScale(10),
                    }}>
                    <CustomText type='medium' size={15} blue key={index}>
                      {item.title}
                    </CustomText>
                  </View>
                  <View style={styles.card}>
                    {item.items.map((item, index) => (
                      <TouchableOpacity key={index} style={styles.moreIconBtn}>
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
                              maxWidth: DVW(71),
                            }}>
                            {item?.desc}
                          </CustomText>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalContainer: {
    height: "95%",
    backgroundColor: "#f8f5f5",
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(20),
    position: "absolute",
    bottom: 0,
    width: "100%",
    overflow: "hidden",
  },
  card: {
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
  },
  moreIconBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(15),
    paddingVertical: moderateScale(15),
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#deefef",
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
});
