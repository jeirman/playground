import React, { Component } from "react";

import { createStackNavigator } from "react-navigation";
import { FluidNavigator } from "react-navigation-fluid-transitions";
import SplashScreen from "./SplashScreen";
import LoginScreen from "./LoginScreen";
import SetupScreen from "./SetupScreen";
import TourScreen from "./TourScreen";
import LoadingScreen from "./LoadingScreen";
import MainTab from "./MainTab";

const LoginStack = FluidNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Login: {
      screen: LoginScreen
    },
    Setup: {
      screen: SetupScreen
    },
    Tour: {
      screen: TourScreen
    },
    Loading: {
      screen: LoadingScreen
    },
    Main: {
      screen: MainTab
    }
  },
  {
    initialRouteName: "Splash",
    headerMode: "none"
  }
);
export default LoginStack;
