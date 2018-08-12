import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginScreen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Setup")}
          title="First Time User"
          color="#841584"
          accessibilityLabel="Go to Init Setup screen"
        />
        <Button
          onPress={() => this.props.navigation.navigate("Loading")}
          title="Go to Loading Screen"
          color="#841584"
          accessibilityLabel="Go to Loading screen"
        />
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#587AA0"
  }
});
