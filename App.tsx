import { useFontLoading } from "@src/hooks/services";
import { colors } from "@src/resources/color/color";
import { fontFamily } from "@src/resources/fonts/font-family";
import { AppLoader } from "@src/screens/App-Loader";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
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
          <Text
            style={{
              fontFamily: fontFamily.variable,
            }}>
            Open up App.tsx to start working on your app!
          </Text>
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
