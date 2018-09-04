import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Platform,
  Image,
  Alert
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import BackButton from "../components/BackButton";
import TitleHeader from "../components/TitleHeader";

class CompaniesEnterNumbers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inpIncome: 0,
      inpExpenses: 0,
      inpEmployees: 0,
      inpSalaries: [
        { id: "dave", fullName: "Dave Van De Velde", value: 700 },
        { id: "koen", fullName: "Koen Charpentier", value: 0 },
        { id: "kyle", fullName: "Kyle Barnett", value: 1200 }
      ],
      inpSalariesTotal: 0,
      calcGrossProfit: 0,
      calcTaxes: 0,
      calcNetProfit: 0
    };

    this.onChangeSalaries = this.onChangeSalaries.bind(this);
    this.calcTotalSalaries = this.calcTotalSalaries.bind(this);
    this.updateNumbers = this.updateNumbers.bind(this);
    this.calcProfits = this.calcProfits.bind(this);
  }

  updateNumbers(fieldName) {
    return event => {
      this.setState(
        {
          [fieldName]: parseFloat(event.nativeEvent.text)
            ? parseFloat(event.nativeEvent.text)
            : 0
        },
        this.calcProfits
      );
    };
  }

  onChangeSalaries(fieldName) {
    return event => {
      console.log("in function onChangeSalaries for field " + fieldName);
      var index = this.state.inpSalaries.findIndex(x => x.id === fieldName);
      if (index === -1)
        // handle error
        console.log("ID not found");
      else {
        console.log(
          "Index of " + index + " -- event value of " + event.nativeEvent.text
        );
        this.setState(
          {
            inpSalaries: [
              ...this.state.inpSalaries.slice(0, index),
              Object.assign({}, this.state.inpSalaries[index], {
                value: parseFloat(event.nativeEvent.text)
                  ? parseFloat(event.nativeEvent.text)
                  : 0
              }),
              ...this.state.inpSalaries.slice(index + 1)
            ]
          },
          () => {
            console.log(
              "Items inpSalaries = " + JSON.stringify(this.state.inpSalaries)
            );
            this.calcTotalSalaries();
          }
        );
      }
    };
  }

  calcTotalSalaries() {
    let tmpTotal = 0;
    const { inpSalaries } = this.state;
    inpSalaries.map((data, i) => (tmpTotal += parseFloat(data.value)));
    this.setState({ inpSalariesTotal: tmpTotal }, () => {
      console.log(
        "Total for director salaries = " + this.state.inpSalariesTotal
      );
      this.calcProfits();
    });
  }

  calcProfits() {
    const newGross =
      this.state.inpIncome -
      this.state.inpExpenses -
      this.state.inpEmployees -
      this.state.inpSalariesTotal;
    const newTaxes = newGross * 0.19;
    const newNet = newGross - newTaxes;
    this.setState({
      calcGrossProfit: newGross.toFixed(2),
      calcTaxes: newTaxes.toFixed(2),
      calcNetProfit: newNet.toFixed(2)
    });
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#F2f2f2"
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <ScrollView>
            <View
              style={{
                flex: 0,
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <BackButton navigation={this.props.navigation} />
              {/* Enter New Numbers Title */}
              <TitleHeader title="Enter New Numbers" headerSize="large" />
              {/* Choose month */}
              <View style={{ width: "93%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 5,
                    marginTop: 15
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      marginRight: 5,
                      borderRadius: 6,
                      backgroundColor: "#fab1a0",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>January</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 5,
                      marginLeft: 5,
                      borderRadius: 6,
                      backgroundColor: "#fab1a0",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>February</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 5,
                      borderRadius: 6,
                      backgroundColor: "#fab1a0",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>March</Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 5,
                      borderRadius: 6,
                      backgroundColor: "#fab1a0",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>April</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 5,
                      marginLeft: 5,
                      borderRadius: 6,
                      backgroundColor: "#fab1a0",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>May</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 5,
                      borderRadius: 6,
                      backgroundColor: "#fab1a0",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>June</Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 5,
                      borderRadius: 6,
                      backgroundColor: "#27ae60",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>July</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 5,
                      marginLeft: 5,
                      borderRadius: 6,
                      backgroundColor: "#bdc3c7",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>August</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 5,
                      borderRadius: 6,
                      backgroundColor: "#dfe6e9",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>September</Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 15 }}>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 5,
                      borderRadius: 6,
                      backgroundColor: "#bdc3c7",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>October</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginRight: 5,
                      marginLeft: 5,
                      borderRadius: 6,
                      backgroundColor: "#bdc3c7",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>November</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 5,
                      borderRadius: 6,
                      backgroundColor: "#bdc3c7",
                      padding: 10,
                      alignItems: "center"
                    }}
                  >
                    <Text>December</Text>
                  </View>
                </View>
              </View>

              {/* Numbers and calculations */}
              <View
                style={{
                  borderRadius: 6,
                  backgroundColor: "white",
                  padding: 10,
                  width: "93%",
                  marginTop: 10,
                  marginBottom: 20
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    flex: 0,
                    paddingVertical: 4,
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      flex: 3,
                      fontWeight: "bold",
                      fontSize: 11,
                      color: "#34495e",
                      textAlignVertical: "center"
                    }}
                  >
                    INCOME
                  </Text>
                  <TextInput
                    style={{ flex: 2 }}
                    placeholder="Income"
                    keyboardType="numeric"
                    onChange={this.updateNumbers("inpIncome")}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 0,
                    paddingVertical: 4,
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      flex: 3,
                      fontWeight: "bold",
                      fontSize: 11,
                      color: "#34495e",
                      textAlignVertical: "center"
                    }}
                  >
                    EXPENSES
                  </Text>
                  <TextInput
                    style={{ flex: 2 }}
                    placeholder="Expenses"
                    keyboardType="numeric"
                    onChange={this.updateNumbers("inpExpenses")}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 0,
                    paddingVertical: 4,
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      flex: 3,
                      fontWeight: "bold",
                      fontSize: 11,
                      color: "#34495e",
                      textAlignVertical: "center"
                    }}
                  >
                    STAFF SALARIES
                  </Text>
                  <TextInput
                    style={{ flex: 2 }}
                    placeholder="Salaries"
                    keyboardType="numeric"
                    onChange={this.updateNumbers("inpEmployees")}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 0,
                    paddingVertical: 4,
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                      fontWeight: "bold",
                      fontSize: 11,
                      color: "#34495e",
                      textAlignVertical: "center"
                    }}
                  >
                    DIRECTOR SALARIES
                  </Text>
                </View>
                {this.state.inpSalaries.map((item, i) => (
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 0,
                      paddingVertical: 4,
                      alignItems: "center"
                    }}
                    key={item.id}
                  >
                    <View style={{ flex: 3 }}>
                      <Text
                        style={{
                          textAlignVertical: "center",
                          paddingLeft: 10
                        }}
                      >
                        {item.fullName}
                      </Text>
                    </View>
                    <TextInput
                      style={{ flex: 2 }}
                      placeholder="Amount"
                      keyboardType="numeric"
                      onChange={this.onChangeSalaries(item.id)}
                      value={item.value.toString()}
                    />
                  </View>
                ))}

                <View
                  style={{
                    flex: 1,
                    marginVertical: 10,
                    height: 1,
                    backgroundColor: "#34495e"
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    flex: 0,
                    paddingVertical: 4,
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      flex: 3,
                      fontWeight: "bold",
                      fontSize: 11,
                      color: "#34495e",
                      textAlignVertical: "center"
                    }}
                  >
                    GROSS PROFIT
                  </Text>
                  <Text style={{ flex: 2 }}>{this.state.calcGrossProfit}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 0,
                    paddingVertical: 4,
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      flex: 3,
                      fontWeight: "bold",
                      fontSize: 11,
                      color: "#34495e",
                      textAlignVertical: "center"
                    }}
                  >
                    TAXES
                  </Text>
                  <Text style={{ flex: 2 }}>{this.state.calcTaxes}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 0,
                    paddingVertical: 4,
                    alignItems: "center"
                  }}
                >
                  <Text
                    style={{
                      flex: 3,
                      fontWeight: "bold",
                      fontSize: 11,
                      color: "#34495e",
                      textAlignVertical: "center"
                    }}
                  >
                    NET PROFIT
                  </Text>
                  <Text style={{ flex: 2 }}>{this.state.calcNetProfit}</Text>
                </View>

                <TouchableOpacity>
                  <View
                    style={{
                      padding: 10,
                      flex: 1,
                      backgroundColor: "#27ae60",
                      borderRadius: 6,
                      alignItems: "center",
                      marginTop: 20
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      SUBMIT NUMBERS
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
export default CompaniesEnterNumbers;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
