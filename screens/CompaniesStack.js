import React, { Component } from "react";

import { createStackNavigator } from "react-navigation";
import CompaniesScreen from "./CompaniesScreen";
import CompaniesDetailScreen from "./CompaniesDetailScreen";
import CompaniesAddScreen from "./CompaniesAddScreen";
import CompaniesEditScreen from "./CompaniesEditScreen";
import CompaniesEnterNumbers from "./CompaniesEnterNumbers";

const CompaniesStack = createStackNavigator(
  {
    Companies: {
      screen: CompaniesScreen
    },
    CompaniesDetail: {
      screen: CompaniesDetailScreen
    },
    CompaniesAdd: {
      screen: CompaniesAddScreen
    },
    CompaniesEdit: {
      screen: CompaniesEditScreen
    },
    CompaniesEnterNumbers: {
      screen: CompaniesEnterNumbers
    }
  },
  {
    initialRouteName: "Companies",
    headerMode: "none",
    cardStyle: { backgroundColor: "#F2F2F2" }
  }
);
export default CompaniesStack;
