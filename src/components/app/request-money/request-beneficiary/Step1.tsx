import { CustomInput, CustomText } from "@src/components/shared";
import { beneficiary } from "@src/constants/beneficiary";
import { getInitials } from "@src/helper/utils";
import { useSearchFilter } from "@src/hooks/services";
import { colors } from "@src/resources/color/color";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { EllipsisVertical } from "lucide-react-native";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

interface IStep1Props {
  onClick: () => void;
}

export const Step1: React.FC<IStep1Props> = ({ onClick }) => {
  const {
    searchValue,
    setSearchValue,
    filterDataBySearchString,
    filteredData,
  } = useSearchFilter(beneficiary);

  useEffect(() => {
    filterDataBySearchString("name");
  }, [searchValue]);
  return (
    <View style={styles.formContainer}>
      <CustomInput
        titleType='regular'
        titleColor={"#000000"}
        placeholder='search name or account number'
        type='custom'
        keyboardType='default'
        onChangeText={(value) => setSearchValue(value)}
        value={searchValue}
        searchInput
      />
      <FlatList
        data={filteredData}
        keyExtractor={(items, index) => `${items.name.toString() + index}`}
        contentContainerStyle={{
          paddingBottom: DVH(10),
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => onClick()}
            key={index}
            style={{
              paddingVertical: moderateScale(10),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <View style={styles.initialsContainer}>
              <CustomText
                type='medium'
                size={15}
                white
                style={styles.initialsText}>
                {getInitials(item.name)}
              </CustomText>
              <View style={styles.textContainer}>
                <CustomText type='regular' size={15} blue>
                  {item?.name}
                </CustomText>
                <CustomText
                  type='regular'
                  size={15}
                  style={{
                    color: "#70747E",
                  }}>
                  {item?.phone_number}
                </CustomText>
              </View>
            </View>
            <TouchableOpacity>
              <EllipsisVertical color={colors.black} size={moderateScale(15)} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={2}
        initialNumToRender={2}
        windowSize={2}
        updateCellsBatchingPeriod={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: moderateScale(20),
  },
  initialsText: {
    backgroundColor: "#887EF6",
    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(13),
    borderRadius: moderateScale(100),
  },
  initialsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
  },
  textContainer: {
    gap: moderateScale(5),
  },
});
