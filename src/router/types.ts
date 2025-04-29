import { type ParamListBase } from "@react-navigation/native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type BottomTabScreenProps } from "@react-navigation/bottom-tabs";

//auth screen stack navigation
export interface AuthStackParamList extends ParamListBase {
  Onboarding: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
}

export type AuthScreenProps<ScreenName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, ScreenName>;

//bottom tab-bar screen navigation
export interface BottomTabBarStackParamList extends ParamListBase {
  Home: undefined;
  Payments: undefined;
  More: undefined;
  Profile: undefined;
  SendMoney: undefined;
  RequestMoney: undefined;
}

export type BottomTabBarScreenProps<
  ScreenName extends keyof BottomTabBarStackParamList
> = BottomTabScreenProps<BottomTabBarStackParamList, ScreenName>;

//native and app screen navigation
export interface RootStackParamList extends ParamListBase {
  Notifications: undefined;
  BillPayment: undefined;
  SendMoney: undefined;
  RequestMoney: undefined;
  SendUsingSquareTag: undefined;
  SendToContactList: undefined;
}

export type RootStackScreenProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;
