import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class CompaniesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CompaniesScreen</Text>
      </View>
    );
  }
}
export default CompaniesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
