import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import DashboardCompaniesItem from "./DashboardCompaniesItem";

class DashboardCompanies extends Component {
  render(props) {
    return (
      <View style={styles.container}>
        <DashboardCompaniesItem navigation={this.props.navigation} />
        <DashboardCompaniesItem navigation={this.props.navigation} />
      </View>
    );
  }
}
export default DashboardCompanies;

const styles = EStyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }
});
