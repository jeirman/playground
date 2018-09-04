import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

class TestModalScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          opacity: 0.5
        }}
      >
        <View
          style={{
            height: "50%",
            width: "75%",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6
          }}
        >
          <Text>Testing a modal with transparent background</Text>
        </View>
      </View>
    );
  }
}

const DashboardModal = createStackNavigator(
  {
    MyTestModal: {
      screen: TestModalScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
export default DashboardModal;
