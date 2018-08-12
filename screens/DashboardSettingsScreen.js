import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class DashboardSettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DashboardSettingsScreen</Text>
      </View>
    );
  }
}
export default DashboardSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
