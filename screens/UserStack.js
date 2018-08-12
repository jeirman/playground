import React, { Component } from "react";

import { createStackNavigator } from "react-navigation";
import UserScreen from "./UserScreen";

const UserStack = createStackNavigator(
  {
    User: {
      screen: UserScreen
    }
  },
  {
    initialRouteName: "User",
    headerMode: "none",
    cardStyle: { backgroundColor: "#F2F2F2" }
  }
);
export default UserStack;
