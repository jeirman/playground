import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import CompaniesStructureItem from "./CompaniesStructureItem";

class CompaniesStructure extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CompaniesStructureItem />
        <CompaniesStructureItem />
      </View>
    );
  }
}
export default CompaniesStructure;

const styles = EStyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }
});
