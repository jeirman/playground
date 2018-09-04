import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

class DashboardCompaniesItem extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.navigation.push("CompaniesDetail")}
      >
        <View
          style={{
            backgroundColor: "#27ae60",
            borderRadius: 6,
            width: "93%",
            flex: 0,
            marginVertical: 5
          }}
        >
          <View
            style={{
              flex: 0,
              marginLeft: 10,
              backgroundColor: "white",
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
              padding: 10
            }}
          >
            <View style={{ marginBottom: 5 }}>
              <Text style={{ fontWeight: "600" }}>Company 1</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginVertical: 3
              }}
            >
              <Text style={{ flex: 1, textAlign: "left", color: "#7f8c8d" }}>
                Cash Flow
              </Text>
              <Text style={{ flex: 1, textAlign: "center" }}>
                + £ 12,500.00
              </Text>
              <Text style={{ flex: 1, textAlign: "right" }}>- £ 4,862.00</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginVertical: 3
              }}
            >
              <Text style={{ flex: 1, textAlign: "left", color: "#7f8c8d" }}>
                Taxes
              </Text>
              <Text style={{ flex: 1, textAlign: "center" }} />
              <Text style={{ flex: 1, textAlign: "right" }}>- £ 1,328.00</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginVertical: 3
              }}
            >
              <Text style={{ flex: 1, textAlign: "left", color: "#7f8c8d" }}>
                Profit
              </Text>
              <Text style={{ flex: 1, textAlign: "center" }}>
                + £ 12,500.00
              </Text>
              <Text style={{ flex: 1, textAlign: "right" }}>- £ 4,862.00</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default DashboardCompaniesItem;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
