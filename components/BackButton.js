import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

class BackButton extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.navigation.goBack(null)}
      >
        <View style={styles.container}>
          <FontAwesome5
            name="long-arrow-alt-left"
            size={22}
            color="rgba(0,0,0,0.4)"
            style={{ paddingRight: 10 }}
          />
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              textAlign: "left",
              color: "rgba(0,0,0,0.4)"
            }}
          >
            Back
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default BackButton;

const styles = EStyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 10,
    width: "93%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  }
});
