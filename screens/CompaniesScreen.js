import React, { Component } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import TitleHeader from "../components/TitleHeader";
import CompaniesCarousel from "../components/CompaniesCarousel";

class CompaniesScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#F2f2f2"
        }}
      >
        <ScrollView>
          <View
            style={{
              flex: 0,
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            {/* Companies Heading */}
            <TitleHeader
              title="Companies"
              headerSize="large"
              faIcon="plus"
              navScreen="CompaniesAdd"
              navigation={this.props.navigation}
            />
            {/* Companies Carousel */}
            <CompaniesCarousel />
            {/* Companies Heading */}
            <TitleHeader title="Something else" headerSize="small" />
            {/* Deatils */}
            <View style={{ width: "93%" }}>
              <Text>What can be put here? Timeline? Balance Sheets? ...</Text>
              <Text>
                Has to be (maybe) quite different from the Company Details
                screen to be relevant and useful
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default CompaniesScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
