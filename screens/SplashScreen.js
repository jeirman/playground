import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SplashScreen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Login")}
          title="Go to Login Screen"
          color="#841584"
          accessibilityLabel="Go to Login screen"
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
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#587AA0"
  }
});
