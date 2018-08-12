import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LoadingScreen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Main")}
          title="Let's get started"
          color="#841584"
          accessibilityLabel="Go to Main App screen"
        />
      </View>
    );
  }
}
export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#587AA0"
  }
});
