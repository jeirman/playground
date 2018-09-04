import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Touchable,
  TouchableOpacity,
  Alert
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import Carousel from "react-native-snap-carousel";
import { SLIDE_COLORS } from "../assets/data";
import CompaniesBackgroundItem from "./CompaniesBackgroundItem";

const SLIDER_1_FIRST_ITEM = 0;

class CompaniesBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderActiveSlide: SLIDER_1_FIRST_ITEM
    };
    this.color_data = SLIDE_COLORS;
    this._renderItem = this._renderItem.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount(props) {}

  onPress() {
    Alert.alert(
      "Item clicked: " +
        this.state.sliderActiveSlide +
        "\nName: " +
        this.color_data[this.state.sliderActiveSlide].slideColor
    );
  }

  _renderItem({ item, index }) {
    return (
      <TouchableOpacity onPress={this.onPress} activeOpacity={1}>
        <CompaniesBackgroundItem data={item} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Carousel
        ref={c => (this._slider1Ref = c)}
        renderItem={this._renderItem}
        firstItem={SLIDER_1_FIRST_ITEM}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        data={this.color_data}
        onSnapToItem={index => this.setState({ sliderActiveSlide: index })}
      />
    );
  }
}
export default CompaniesBackground;

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get("window").width;
//const itemWidth = slideWidth + horizontalMargin * 2;
const itemWidth = sliderWidth * 0.85;
const itemHeight = 200;

const styles = EStyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: "#2C3E50",
    padding: 15,
    height: 150,
    width: "93%"
  }
});
