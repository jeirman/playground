import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

class DashboardScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
      >
        <View style={styles.innerContainer}>
          <Text>DashboardScreen</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default DashboardScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  innerContainer: {
    flex: 1,
    width: "$innerContainerWidth",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
