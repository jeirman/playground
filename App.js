/**
 * Playground app
 * Copyright Jeirman - 2018
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import LoginStack from "./screens/InitStack";

EStyleSheet.build({
  $textColor: "#0275d8",
  $initScreenBackgroundColor: "#587AA0",
  $mainScreenBackgroundColor: "#F2F2F2",
  $innerContainerWidth: "95%"
});

export default class App extends React.Component {
  render() {
    return <LoginStack />;
  }
}
