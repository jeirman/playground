import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class CompaniesAddScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CompaniesAddScreen</Text>
      </View>
    );
  }
}
export default CompaniesAddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
