import React, { Component } from "react";
import { View, Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

class DashboardTaxes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            borderBottomColor: "#666",
            borderBottomWidth: 1,
            padding: 4
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: "left"
            }}
          />
          <Text style={{ flex: 1, textAlign: "center" }}>2018/2019</Text>
          <Text style={{ flex: 1, textAlign: "right" }}>2019/2020</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 4
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: "left"
            }}
          >
            Company 1
          </Text>
          <Text style={{ flex: 1, textAlign: "center" }}>2018/2019</Text>
          <Text style={{ flex: 1, textAlign: "right" }}>2019/2020</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 4
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: "left"
            }}
          >
            Company 2
          </Text>
          <Text style={{ flex: 1, textAlign: "center" }}>2018/2019</Text>
          <Text style={{ flex: 1, textAlign: "right" }}>2019/2020</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 4
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: "left"
            }}
          >
            Company 3
          </Text>
          <Text style={{ flex: 1, textAlign: "center" }}>2018/2019</Text>
          <Text style={{ flex: 1, textAlign: "right" }}>2019/2020</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 4
          }}
        >
          <Text
            style={{
              flex: 1,
              textAlign: "left"
            }}
          >
            Company 4
          </Text>
          <Text style={{ flex: 1, textAlign: "center" }}>2018/2019</Text>
          <Text style={{ flex: 1, textAlign: "right" }}>2019/2020</Text>
        </View>
      </View>
    );
  }
}
export default DashboardTaxes;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 6,
    width: "93%",
    flex: 0,
    marginVertical: 5,
    padding: 10
  }
});
