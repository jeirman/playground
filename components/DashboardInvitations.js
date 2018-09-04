import React, { Component } from "react";
import { View, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import DashboardInvitationsItem from "./DashboardInvitationsItem";

class DashboardInvitations extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
        <DashboardInvitationsItem />
        <DashboardInvitationsItem />
      </View>
    );
  }
}
export default DashboardInvitations;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
