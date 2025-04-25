import {
  CustomButton,
  CustomInput,
  CustomPhoneInput,
  CustomText,
} from "@src/components/shared";
import { useFontLoading } from "@src/hooks/services";
import { colors } from "@src/resources/color/color";
import { AppLoader } from "@src/screens/App-Loader";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar as RNStatusBar,
  Platform,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const { isFontLoadingComplete, loadResourcesAndDataAsync } = useFontLoading();
  //load font family resources
  useEffect(() => {
    const timer = setTimeout(() => {
      loadResourcesAndDataAsync();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      {Platform.OS === "ios" ? (
        <RNStatusBar backgroundColor={"#052C22"} />
      ) : (
        <StatusBar
          style={!isFontLoadingComplete ? "light" : "dark"}
          backgroundColor={!isFontLoadingComplete ? colors.blue : colors.white}
        />
      )}
      {!isFontLoadingComplete ? (
        <AppLoader />
      ) : (
        <View style={styles.container}>
          <CustomText blue size={20} type='light'>
            Hello, From square me technologies
          </CustomText>
          <CustomButton
            buttonType='Outline'
            title='Hello'
            textType='medium'
            onPress={() => {}}
            textBlue
            textSize={16}
          />
          <CustomInput
            titleType='semi-bold'
            title='Amount to Send'
            titleColor={colors.black}
            placeholder='Enter amount'
            type='country'
            style={{}}
            onSelectCountry={(country, currency) => {
              console.log(
                `Selected Country: ${country}, Currency: ${currency}`
              );
            }}
            keyboardType='phone-pad'
          />
          <CustomPhoneInput
            value={""}
            titleColor={colors.black}
            title='Enter your phone number'
            titleType='regular'
            onChangeText={(value) => {}}
            placeholder='Enter your phone number'
            style={{}}
            showErrorText
            error={"Error"}
          />
        </View>
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
