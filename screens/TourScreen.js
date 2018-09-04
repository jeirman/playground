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
import Swiper from "react-native-swiper";

class TourScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { showSkipButton: true };
  }

  indexChanged(index) {
    if (index === 2) {
      this.setState(previousState => {
        return { showSkipButton: false };
      });
    } else {
      this.setState(previousState => {
        return { showSkipButton: true };
      });
    }
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#E74C3C",
          alignItems: "center"
        }}
      >
        <View
          style={{
            width: "93%",
            alignItems: "center",
            marginBottom: 15
          }}
        >
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Transition shared="appLogo">
              <Image
                source={require("../assets/protected.png")}
                resizeMode="cover"
                style={{ width: 50, height: 50 }}
                width={50}
                height={50}
              />
            </Transition>
          </View>
        </View>

        <View style={{ flex: 1, width: "93%", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 6,
              padding: 10,
              alignItems: "center"
            }}
          >
            <Swiper
              loop={false}
              paginationStyle={{
                bottom: -2
              }}
              onMomentumScrollEnd={(e, state, context) =>
                this.indexChanged(state.index)
              }
            >
              <View style={{ flex: 1, marginBottom: 22, alignItems: "center" }}>
                <Image
                  source={require("../assets/tour01.png")}
                  style={{ width: 200, height: 200 }}
                />
              </View>
              <View style={{ flex: 1, marginBottom: 22, alignItems: "center" }}>
                <Image
                  source={require("../assets/mobile.gif")}
                  style={{ width: 200, height: 200 }}
                />
              </View>
              <View style={{ flex: 1, marginBottom: 22, alignItems: "center" }}>
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/guru.png")}
                    style={{ width: 200, height: 200 }}
                  />
                </View>
                <View style={{ width: "100%" }}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Loading")}
                  >
                    <View
                      style={{
                        padding: 8,
                        backgroundColor: "#27ae60",
                        borderRadius: 6,
                        alignItems: "center"
                      }}
                    >
                      <Text style={{ color: "white" }}>Let's start...</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Swiper>
          </View>
        </View>
        <View style={{ height: 50, alignItems: "center" }}>
          {this.state.showSkipButton && (
            <View style={{ padding: 10 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Loading")}
              >
                <Text style={{ fontWeight: "bold" }}>SKIP</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
export default TourScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E74C3C"
  }
});
