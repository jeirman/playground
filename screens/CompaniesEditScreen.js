import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class CompaniesEditScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CompaniesEditScreen</Text>
      </View>
    );
  }
}
export default CompaniesEditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
