import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

class CompaniesStructureItem extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 6,
          width: "93%",
          flex: 0,
          marginVertical: 5,
          padding: 4,
          flexDirection: "row",
          justifyContent: "flex-start"
        }}
      >
        <View
          style={{
            marginRight: 10
          }}
        >
          <Image
            source={require("../assets/elon-musk-square.jpg")}
            style={{ borderRadius: 6, width: 40, height: 40 }}
          />
        </View>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 11 }}>Elon Musk</Text>
            <Text style={{ fontSize: 11 }}>Admin User</Text>
          </View>
          <Text style={{ fontSize: 11, color: "#666" }}>
            elon.musk@spacex.com
          </Text>
          <Text style={{ fontSize: 11 }}>Line 3</Text>
        </View>
      </View>
    );
  }
}
export default CompaniesStructureItem;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
