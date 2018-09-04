import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import TitleHeader from "../components/TitleHeader";
import DashboardChart from "../components/DashboardChart";
import DashboardCompanies from "../components/DashboardCompanies";
import DashboardTaxes from "../components/DashboardTaxes";
import DashboardInvitations from "../components/DashboardInvitations";

class DashboardScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#F2f2f2"
        }}
      >
        <ScrollView>
          <View
            style={{
              flex: 0,
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            {/* Dashboard Heading */}
            <TitleHeader
              title="Dashboard"
              headerSize="large"
              faIcon="cog"
              navScreen="Settings"
              navigation={this.props.navigation}
            />

            {/* Overview Chart */}
            <DashboardChart />

            {/* Companies Heading */}
            <TitleHeader
              title="Companies"
              headerSize="small"
              faIcon="plus"
              navScreen="CompaniesAdd"
              navigation={this.props.navigation}
            />

            {/* Companies Listing */}
            <DashboardCompanies navigation={this.props.navigation} />

            {/* Taxes Heading */}
            <TitleHeader title="Corporation Taxes" headerSize="small" />

            {/* Taxes Listing */}
            <DashboardTaxes />

            {/* Invitations Heading */}
            <TitleHeader title="Invitations" headerSize="small" />
            {/* Taxes Listing */}
            <DashboardInvitations />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default DashboardScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "80%"
  }
});
