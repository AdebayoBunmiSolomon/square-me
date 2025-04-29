import {
  AuthStackParamList,
  BottomTabBarStackParamList,
  RootStackParamList,
} from "@src/router/types";
import { ImageSourcePropType } from "react-native";

export type authScreenTypes = {
  screenName: keyof AuthStackParamList;
  component: React.ComponentType<any>;
};

export type bottomTabScreenTypes = {
  screenName: keyof BottomTabBarStackParamList;
  component: React.ComponentType<any>;
};

export type appScreenTypes = {
  screenName: keyof RootStackParamList;
  component: React.ComponentType<any>;
};

export type onboardingTypes = {
  topTitle: string;
  bottomTitle: string;
  description: string;
  image: ImageSourcePropType;
}[];

export type quickActionsTypes = {
  image: ImageSourcePropType;
};

export type suggestedActionsTypes = {
  image: ImageSourcePropType;
  title: string;
};

export type moreTypes = {
  title: string;
  desc: string;
  icon: ImageSourcePropType;
  service: {
    title: string;
    items: {
      title: string;
      desc: string;
      icon: ImageSourcePropType;
    }[];
  }[];
}[];

export type billPaymentTypes = {
  title: string;
  desc: string;
  screen: string;
  icon: ImageSourcePropType;
}[];

export type sendMoneyOptionTypes = ImageSourcePropType;

export type profileSettingsType = {
  title: string;
  icon: ImageSourcePropType;
  navigation: string;
}[];

export type badgesTypes = ImageSourcePropType;
