import React, { Component } from "react";
import { View, Dimensions, Alert } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Color from "color";
import LinearGradient from "react-native-linear-gradient";
import { Grid, XAxis, BarChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";
import * as scale from "d3-scale";

const dataChart = [
  {
    month: "Jan",
    money: Math.random() * 100000
  },
  {
    month: "Feb",
    money: Math.random() * 100000
  },
  {
    month: "Mar",
    money: Math.random() * 100000
  },
  {
    month: "Apr",
    money: Math.random() * 100000
  },
  {
    month: "May",
    money: Math.random() * 100000
  },
  {
    month: "Jun",
    money: Math.random() * 100000
  },
  {
    month: "Jul",
    money: Math.random() * 100000
  },
  {
    month: "Aug",
    money: Math.random() * 100000
  },
  {
    month: "Sep",
    money: Math.random() * 100000
  },
  {
    month: "Oct",
    money: Math.random() * 100000
  },
  {
    month: "Nov",
    money: Math.random() * 100000
  },
  {
    month: "Dec",
    money: Math.random() * 100000
  }
];

const axesSvg = { fontSize: 9, fill: "gray" };
const xAxisHeight = 10;

class DashboardChart extends Component {
  render() {
    const Labels = ({ x, y, bandwidth, data }) =>
      data.map((value, index) => (
        <Text
          key={value.month}
          x={x(index) + bandwidth / 2 - 3}
          y={y(value.money) + 10}
          fontSize={8}
          fill={"white"}
          alignmentBaseline={"middle"}
          textAnchor={"middle"}
        >
          {Math.round(value.money / 1000)}K
        </Text>
      ));

    const endColor = Color("#34495e", "hex")
      .lighten(0.7)
      .hex();
    return (
      <LinearGradient
        colors={["#34495e", endColor]}
        style={{
          borderRadius: 6,
          padding: 10,
          height: 130,
          width: "93%"
        }}
      >
        <View
          style={{
            width: "100%"
          }}
        >
          <BarChart
            style={{ height: 100 }}
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
              marginTop: 5
            }}
            data={dataChart}
            scale={scale.scaleBand}
            svg={Object.assign(axesSvg, { fill: "white" })}
            xAccessor={({ item }) => item.month}
          />
        </View>
      </LinearGradient>
    );
  }
}
export default DashboardChart;

const styles = EStyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: "#2C3E50",
    padding: 15,
    height: 150,
    width: "93%"
  }
});
