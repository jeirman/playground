import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

class TitleHeader extends Component {
  render() {
    const TITLE_SIZE = this.props.headerSize === "large" ? 28 : 22;
    const ICON_SIZE = this.props.headerSize === "large" ? 20 : 14;

    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: TITLE_SIZE,
            fontWeight: "bold",
            textAlign: "left"
          }}
        >
          {this.props.title}
        </Text>
        {this.props.navScreen && (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(this.props.navScreen)}
          >
            <FontAwesome5
              name={this.props.faIcon}
              size={ICON_SIZE}
              color="rgba(0,0,0,0.4)"
              style={{ paddingRight: 5 }}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
export default TitleHeader;

const styles = EStyleSheet.create({
  container: {
    marginTop: 10,
    width: "93%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  }
});
