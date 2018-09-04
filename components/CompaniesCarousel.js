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
import { ENTRIES1, COMPANIES_1, COMPANIES_3 } from "../assets/data";
import CompaniesCarouselItem from "./CompaniesCarouselItem";

const SLIDER_1_FIRST_ITEM = 0;

class CompaniesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderActiveSlide: SLIDER_1_FIRST_ITEM
    };
    this.comb_data = COMPANIES_3;
    this._renderItem = this._renderItem.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount(props) {
    this.comb_data.unshift({
      name: "Combined Overview",
      slideColor: "#34495e"
    });
  }

  onPress() {
    Alert.alert(
      "Item clicked: " +
        this.state.sliderActiveSlide +
        "\nName: " +
        this.comb_data[this.state.sliderActiveSlide].name
    );
  }

  _renderItem({ item, index }) {
    return (
      <TouchableOpacity onPress={this.onPress} activeOpacity={1}>
        <CompaniesCarouselItem data={item} />
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
        data={this.comb_data}
        onSnapToItem={index => this.setState({ sliderActiveSlide: index })}
      />
    );
  }
}
export default CompaniesCarousel;

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
