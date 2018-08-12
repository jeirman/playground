import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class SetupScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SetupScreen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Tour")}
          title="Go to Tour Screen"
          color="#841584"
          accessibilityLabel="Go to Tour screen"
        />
      </View>
    );
  }
}
export default SetupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#587AA0"
  }
});
