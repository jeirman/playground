import React, { Component } from "react";
import { View, SafeAreaView, ScrollView, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { Grid, XAxis, YAxis, BarChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";
import * as scale from "d3-scale";

import TitleHeader from "../components/TitleHeader";

const dataSmall = [50, 10, 40, 95, 85];
const dataChart = [
  {
    month: "Jan",
    money: 17400
  },
  {
    month: "Feb",
    money: 16320
  },
  {
    month: "Mar",
    money: 19500
  },
  {
    month: "Apr",
    money: 23400
  },
  {
    month: "May",
    money: 32000
  },
  {
    month: "Jun",
    money: 16320
  },
  {
    month: "Jul",
    money: 19500
  },
  {
    month: "Aug",
    money: 23400
  },
  {
    month: "Sep",
    money: 32000
  },
  {
    month: "Oct",
    money: 21000
  },
  {
    month: "Nov",
    money: 19500
  },
  {
    month: "Dec",
    money: 23400
  }
];

const axesSvg = { fontSize: 9, fill: "gray" };
const xAxisHeight = 10;

class UserScreen extends Component {
  render() {
    const Labels = ({ x, y, bandwidth, data }) =>
      data.map((value, index) => (
        <Text
          key={value.month}
          x={x(index) + bandwidth / 2 - 4}
          y={y(value.money) + 15}
          fontSize={8}
          fill={"white"}
          alignmentBaseline={"middle"}
          textAnchor={"middle"}
        >
          {Math.round(value.money / 1000)}K
        </Text>
      ));

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
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            {/* User Heading */}
            <TitleHeader title="User" headerSize="large" />
            <View
              style={{
                height: 160,
                width: "93%",
                flexDirection: "row"
              }}
            >
              <View style={{ flex: 1, marginLeft: 0 }}>
                <BarChart
                  style={{ flex: 1 }}
                  data={dataChart}
                  svg={{ fill: "rgb(39, 174, 96)" }}
                  gridMin={0}
                  numberOfTicks={5}
                  xAccessor={({ item }) => item.month}
                  yAccessor={({ item }) => item.money}
                >
                  <Grid direction={Grid.Direction.HORIZONTAL} />
                  <Labels />
                </BarChart>
                <XAxis
                  style={{
                    marginHorizontal: 0,
                    height: xAxisHeight,
                    marginTop: 2
                  }}
                  data={dataChart}
                  scale={scale.scaleBand}
                  svg={Object.assign(axesSvg, { fill: "black" })}
                  xAccessor={({ item }) => item.month}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default UserScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
