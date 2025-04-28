import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { appScreenNames } from "@src/navigation";
import { Payments } from "@src/screens/app/bottom-tab";
import { RequestMoney, SendMoney } from "@src/screens/app/bottom-tab/payment";

const Stack = createNativeStackNavigator<RootStackParamList>();
export const PaymentStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"PaymentStackNavigator"} component={Payments} />
      <Stack.Screen
        name={appScreenNames.REQUEST_MONEY}
        component={RequestMoney}
      />
      <Stack.Screen name={appScreenNames.SEND_MONEY} component={SendMoney} />
    </Stack.Navigator>
  );
};
