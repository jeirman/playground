import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Transition } from "react-navigation-fluid-transitions";

class LoginScreen extends Component {
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
            alignItems: "center"
          }}
        >
          <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
            <Transition shared="appLogo">
              <Image
                source={require("../assets/protected.png")}
                resizeMode="cover"
                style={{ width: 100, height: 100 }}
                width={100}
                height={100}
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
              width: "93%",
              borderRadius: 6,
              padding: 10,
              paddingHorizontal: 24,
              backgroundColor: "white",
              opacity: 0.5,
              alignItems: "center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 0,
                paddingVertical: 4,
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  flex: 1,
                  fontWeight: "bold",
                  fontSize: 13,
                  color: "#34495e",
                  textAlignVertical: "center"
                }}
              >
                EMAIL
              </Text>
              <TextInput
                style={{ flex: 2, fontSize: 18 }}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View
              style={{
                marginVertical: 8,
                height: 1,
                width: "100%",
                backgroundColor: "#34495e"
              }}
            />
            <View
              style={{
                flexDirection: "row",
                flex: 0,
                paddingVertical: 4,
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  flex: 1,
                  fontSize: 13,
                  fontWeight: "bold",
                  color: "#34495e",
                  textAlignVertical: "center"
                }}
              >
                PASSWORD
              </Text>
              <TextInput
                style={{ flex: 2, fontSize: 18 }}
                placeholder="Required"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => this.props.navigation.navigate("Loading")}
            >
              <Text
                style={{
                  fontSize: 28,
                  fontFamily: "RobotoSlab-Bold",
                  fontWeight: "bold",
                  fontStyle: "normal",
                  color: "white",
                  opacity: 0.9
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ padding: 20 }}
              onPress={() => this.props.navigation.navigate("Setup")}
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
                Forgot Password? (Setup + Tour)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
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
