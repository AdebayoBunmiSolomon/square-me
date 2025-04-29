import { authScreenNames } from "@src/navigation";
import { AuthScreenProps } from "@src/router/types";
import React, { useEffect, useState } from "react";
import { Screen } from "../Screen";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { ActionText, IconHeader } from "@src/common";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import {
  CustomButton,
  CustomOTPInput,
  CustomText,
} from "@src/components/shared";
import { KeyboardDismissal } from "../Keyboard-Dismissal";
import { Fingerprint } from "lucide-react-native";
import { useAuthStore } from "@src/hooks/zustand";

export const Login = ({
  navigation,
}: AuthScreenProps<authScreenNames.LOGIN>) => {
  const { setIsAuthenticated } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [actionText, setActionText] = useState<"Log Out?" | "Forgot PIN?">(
    "Log Out?"
  );

  const login = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsAuthenticated(true);
    } catch (err: any) {
      console.log("Error", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (otp) {
      setActionText("Forgot PIN?");
    } else {
      setActionText("Log Out?");
    }
  }, [otp]);

  const onPressAction = () => {
    if (actionText === "Log Out?") {
      Alert.alert("Log Out", "Perform Log out operation");
    } else {
      navigation.navigate(authScreenNames.FORGOT_PASSWORD);
    }
  };
  return (
    <Screen style={styles.screen} safeArea>
      <KeyboardDismissal>
        <IconHeader
          title='Welcome back John'
          desc='Enter your PIN to access your Squareme account'
        />
        <CustomOTPInput
          numberOfInput={6}
          onComplete={(enteredOTP) => setOtp(enteredOTP)}
          containerStyle={styles.OTPContainer}
        />
        <ActionText
          leftText={"Not John?"}
          actionText={actionText}
          onPressAction={onPressAction}
        />
      </KeyboardDismissal>
      <View style={styles.bottomActionContainer}>
        <TouchableOpacity style={styles.biometricBtn}>
          <Fingerprint
            color={colors.blue}
            size={moderateScale(45)}
            strokeWidth={DVW(0.5)}
          />
        </TouchableOpacity>
        <CustomText type='regular' black size={15} style={styles.biometricText}>
          Use Biometrics
        </CustomText>
        <CustomButton
          title='Log In'
          textType='light'
          textWhite
          blue
          onPress={async () => await login()}
          buttonType='Solid'
          btnStyle={{
            width: "100%",
          }}
          isLoading={isLoading}
        />
        <ActionText leftText={"Not John?"} actionText={"Log Out"} />
        <CustomText type='regular' size={15} blue>
          v2.5.501
        </CustomText>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: moderateScale(15),
  },
  OTPContainer: {
    paddingTop: moderateScale(25),
    paddingBottom: moderateScale(15),
  },
  bottomActionContainer: {
    position: "absolute",
    bottom: moderateScale(20),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: moderateScale(10),
    alignSelf: "center",
  },
  biometricText: {
    paddingBottom: moderateScale(15),
  },
  biometricBtn: {
    padding: moderateScale(15),
    borderRadius: moderateScale(100),
    backgroundColor: "#F3F4F7",
  },
});
