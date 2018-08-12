import React, { Component } from "react";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { createBottomTabNavigator } from "react-navigation";
import DashboardStack from "./DashboardStack";
import CompaniesStack from "./CompaniesStack";
import UserStack from "./UserStack";

const MainTab = createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: {
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name="chart-bar" size={20} color="white" />
        )
      }
    },
    Companies: {
      screen: CompaniesStack,
      navigationOptions: {
        tabBarLabel: "Companies",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name="building" size={20} color="white" />
        )
      }
    },
    User: {
      screen: UserStack,
      navigationOptions: {
        tabBarLabel: "User",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 name="user-tie" size={20} color="white" />
        )
      }
    }
  },
  {
    initialRouteName: "Dashboard",
    headerMode: "none",
    order: ["Companies", "Dashboard", "User"],
    tabBarOptions: {
      activeTintColor: "#D4AF37",
      inactiveTintColor: "white",
      style: {
        backgroundColor: "#587AA0"
      }
    }
  }
);
export default MainTab;
