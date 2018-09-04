import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

class DashboardInvitationsItem extends Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 6,
            width: "93%",
            flex: 0,
            marginVertical: 5,
            padding: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <Text style={{ flex: 1, textAlign: "left" }}>Company 1</Text>
            <TouchableOpacity>
              <View
                style={{
                  padding: 4,
                  marginHorizontal: 5,
                  paddingHorizontal: 8,
                  borderRadius: 4,
                  backgroundColor: "green"
                }}
              >
                <Text style={{ color: "white", fontSize: 11 }}>Accept</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default DashboardInvitationsItem;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
