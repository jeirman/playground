import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ImagePicker from "react-native-image-crop-picker";

class SetupScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleChooseAvatar() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }

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
            width: "100%",
            alignItems: "center"
          }}
        >
          <View
            style={{ alignItems: "center", marginTop: 20, marginBottom: 30 }}
          >
            <Image
              source={require("../assets/protected.png")}
              resizeMode="cover"
              style={{ width: 100, height: 100 }}
              width={100}
              height={100}
            />
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
                FULL NAME
              </Text>
              <TextInput
                style={{ flex: 2, fontSize: 18 }}
                placeholder="Full Name"
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
                PHOTO
              </Text>
              <TouchableOpacity
                style={{
                  height: 20,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  flex: 2
                }}
                onPress={this.handleChooseAvatar.bind(this)}
              >
                <FontAwesome5
                  name="image"
                  size={16}
                  color="rgba(0,0,0,0.4)"
                  style={{ paddingRight: 5 }}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    textAlignVertical: "center"
                  }}
                >
                  Choose photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10, alignItems: "center" }}>
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => this.props.navigation.navigate("Tour")}
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
              Take the Tour
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
