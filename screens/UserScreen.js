import React, { Component } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

class UserScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View>
            <Text>UserScreen</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
