import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity, Alert } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Color from "color";
import LinearGradient from "react-native-linear-gradient";

class CompaniesCarouselItem extends Component {
  render(props) {
    const { data } = this.props;
    return (
      <LinearGradient
        colors={[
          data.slideColor,
          Color(data.slideColor, "hex")
            .lighten(0.25)
            .hex()
        ]}
        style={styles.slide}
      >
        <View style={styles.slideInnerContainer}>
          <Text style={styles.title}>{data.name}</Text>
        </View>
      </LinearGradient>
    );
  }
}
export default CompaniesCarouselItem;

const sliderWidth = Dimensions.get("window").width;
const itemWidth = sliderWidth * 0.85;
const itemHeight = 200;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  slide: {
    width: itemWidth,
    height: itemHeight,
    //paddingHorizontal: horizontalMargin,
    // other styles for the item container
    //backgroundColor: "green",
    borderRadius: 8,
    marginVertical: 10,
    padding: 10
  },
  slideInnerContainer: {
    padding: 10,
    flex: 1
    // other styles for the inner container
  }
});
