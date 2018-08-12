import React, { Component } from "react";

import { createStackNavigator } from "react-navigation";
import DashboardScreen from "./DashboardScreen";
import DashboardSettingsScreen from "./DashboardSettingsScreen";

const DashboardStack = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardScreen
    },
    Settings: {
      screen: DashboardSettingsScreen
    }
  },
  {
    initialRouteName: "Dashboard",
    headerMode: "none",
    cardStyle: { backgroundColor: "#F2F2F2" }
  }
);
export default DashboardStack;
