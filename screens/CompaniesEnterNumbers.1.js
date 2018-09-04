import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
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
      inpSalaries: [],
      inpSalariesTotal: 0,
      calcGrossProfit: 0,
      calcTaxes: 0,
      calcNetProfit: 0,
      items: [
        { id: "dave", fullName: "Dave Van De Velde", value: 700 },
        { id: "koen", fullName: "Koen Charpentier", value: 0 },
        { id: "kyle", fullName: "Kyle Barnett", value: 1200 }
      ]
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
        },
        this.calcProfits
      );
    };
  }

  onChangeSalaries(fieldName) {
    return event => {
      //Alert.alert("text = " + event.nativeEvent.text);
      /*
      const newSalary = Object.assign({}, this.state.inpSalaries, {
        [fieldName]: parseFloat(event.nativeEvent.text)
      });
      this.setState({ inpSalaries: newSalary }, () => {
        Alert.alert(JSON.stringify(this.state));
        this.calcTotalSalaries();
      });
      */
      var index = this.state.items.findIndex(x => x.id === fieldName);
      if (index === -1)
        // handle error
        Alert.alert("ID not found");
      else
        this.setState(
          {
            items: [
              ...this.state.items.slice(0, index),
              Object.assign({}, this.state.items[index], {
                value: parseFloat(event.nativeEvent.text)
              }),
              ...this.state.items.slice(index + 1)
            ]
          },
          () => {
            Alert.alert("Items state = " + JSON.stringify(this.state.items));
            this.calcTotalSalaries();
          }
        );
    };
  }

  calcTotalSalaries() {
    let tmpTotal = 0;
    const { inpSalaries } = this.state;
    //Alert.alert("in calcTotalSalaries - ");
    /*
    Alert.alert(
      "in calcTotalSalaries - " +
        JSON.stringify(inpSalaries) +
        "\nLength array = " +
        inpSalaries.length
    );
    inpSalaries.map((data, i) => Alert.alert(JSON.stringify(data)));
    */
    for (var member of this.state.items) {
      console.log("Value = " + JSON.stringify(member));
    }
  }

  calcProfits() {
    const newGross =
      this.state.inpIncome -
      this.state.inpExpenses -
      this.state.inpSalariesTotal;
    const newTaxes = newGross * 0.19;
    const newNet = newGross - newTaxes;
    this.setState({
      calcGrossProfit: newGross,
      calcTaxes: newTaxes,
      calcNetProfit: newNet
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
                style={{ flexDirection: "row", marginBottom: 5, marginTop: 15 }}
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

              <View
                style={{
                  flexDirection: "row",
                  flex: 0,
                  paddingVertical: 4,
                  alignItems: "center"
                }}
              >
                <View style={{ flex: 3 }}>
                  <Text
                    style={{
                      textAlignVertical: "center",
                      paddingLeft: 10
                    }}
                  >
                    Dave Van De Velde
                  </Text>
                </View>
                <TextInput
                  style={{ flex: 2 }}
                  placeholder="Amount"
                  keyboardType="numeric"
                  onChange={this.onChangeSalaries("dave")}
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
                <View style={{ flex: 3 }}>
                  <Text
                    style={{
                      textAlignVertical: "center",
                      paddingLeft: 10
                    }}
                  >
                    Koen Charpentier
                  </Text>
                </View>
                <TextInput
                  style={{ flex: 2 }}
                  placeholder="Amount"
                  keyboardType="numeric"
                  onChange={this.onChangeSalaries("koen")}
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
                <View style={{ flex: 3 }}>
                  <Text
                    style={{
                      textAlignVertical: "center",
                      paddingLeft: 10
                    }}
                  >
                    Kyle Barnett
                  </Text>
                </View>
                <TextInput
                  style={{ flex: 2 }}
                  placeholder="Amount"
                  keyboardType="numeric"
                  onChange={this.onChangeSalaries("kyle")}
                />
              </View>

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
