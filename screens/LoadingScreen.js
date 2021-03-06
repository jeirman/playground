import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import { Transition } from "react-navigation-fluid-transitions";

class LoadingScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#587AA0",
          alignItems: "center"
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Transition shared="appLogo">
            <Image
              source={require("../assets/protected.png")}
              resizeMode="cover"
              style={{ width: 200, height: 200 }}
              width={200}
              height={200}
            />
          </Transition>
          <Text
            style={{
              color: "white",
              marginTop: 15,
              fontSize: 28,
              fontFamily: "RobotoSlab-Bold",
              fontWeight: "700",
              fontStyle: "normal"
            }}
          >
            TAX APP
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            position: "absolute",
            bottom: 10
          }}
        >
          <TouchableOpacity
            style={{ padding: 20 }}
            onPress={() => this.props.navigation.navigate("Main")}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "RobotoSlab-Bold",
                fontWeight: "700",
                fontStyle: "normal",
                color: "white",
                opacity: 0.8
              }}
            >
              Loading...
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
