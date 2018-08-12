import React, { Component } from "react";

import { createStackNavigator } from "react-navigation";
import CompaniesScreen from "./CompaniesScreen";
import CompaniesDetailScreen from "./CompaniesDetailScreen";
import CompaniesAddScreen from "./CompaniesAddScreen";

const CompaniesStack = createStackNavigator(
  {
    Companies: {
      screen: CompaniesScreen
    },
    Detail: {
      screen: CompaniesDetailScreen
    },
    Add: {
      screen: CompaniesAddScreen
    }
  },
  {
    initialRouteName: "Companies",
    headerMode: "none",
    cardStyle: { backgroundColor: "#F2F2F2" }
  }
);
export default CompaniesStack;
