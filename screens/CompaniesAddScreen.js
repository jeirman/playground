import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Switch,
  Button,
  Alert
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import RNPickerSelect from "react-native-picker-select";
import Modal from "react-native-modalbox";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, CheckBox } from "react-native-elements";

import TitleHeader from "../components/TitleHeader";
import TitleHeaderButton from "../components/TitleHeaderButton";
import CompaniesStructure from "../components/CompaniesStructure";
import CompaniesBackground from "../components/CompaniesBackground";

const nameOfStateVar = "testVar";

class CompaniesAddScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      [nameOfStateVar]: "Init test value",
      selBgColor: null,
      selTextColor: "white",
      checked: false,
      selMonth: undefined,
      months: [
        {
          label: "January",
          value: "jan"
        },
        {
          label: "February",
          value: "feb"
        },
        {
          label: "March",
          value: "mar"
        },
        {
          label: "April",
          value: "apr"
        },
        {
          label: "May",
          value: "may"
        },
        {
          label: "June",
          value: "jun"
        },
        {
          label: "July",
          value: "jul"
        },
        {
          label: "August",
          value: "aug"
        },
        {
          label: "September",
          value: "sep"
        },
        {
          label: "October",
          value: "oct"
        },
        {
          label: "November",
          value: "nov"
        },
        {
          label: "December",
          value: "dec"
        }
      ],
      modal_newDirector_admin: false,
      modal_newDirector_salary: false
    };
  }

  onAddDirectorPress = () => {
    //Alert.alert("Pressed button - add director\nState = " + this.state.testVar);
    this.setState({
      modal_newDirector_salary: false
    });
    this.setState({
      modal_newDirector_admin: false
    });
    this.refs.modal3.open();
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#F2f2f2"
        }}
      >
        <Modal
          style={{ borderRadius: 6, width: 300, padding: 10, height: "auto" }}
          position={"center"}
          ref={"modal3"}
          backdropOpacity={0.85}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
            New Director Details
          </Text>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 4,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                minWidth: 100,
                fontWeight: "bold",
                fontSize: 11,
                color: "#34495e",
                textAlignVertical: "center"
              }}
            >
              NAME
            </Text>
            <TextInput placeholder="name" style={{ flex: 1 }} />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 4,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                minWidth: 100,
                fontWeight: "bold",
                fontSize: 11,
                color: "#34495e",
                textAlignVertical: "center"
              }}
            >
              EMAIL
            </Text>
            <TextInput
              placeholder="email"
              style={{ flex: 1 }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 4,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                minWidth: 100,
                fontWeight: "bold",
                fontSize: 11,
                color: "#34495e",
                textAlignVertical: "center"
              }}
            >
              PERCENTAGE
            </Text>
            <TextInput
              placeholder="percentage"
              style={{ flex: 1 }}
              keyboardType="decimal-pad"
              maxLength={5}
            />
          </View>
          <View
            style={{
              marginVertical: 10,
              height: 1,
              width: "100%",
              backgroundColor: "#34495e"
            }}
          />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingVertical: 4,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                minWidth: 100,
                fontWeight: "bold",
                fontSize: 11,
                color: "#34495e",
                textAlignVertical: "center"
              }}
            >
              SALARY
            </Text>
            <Switch
              value={this.state.modal_newDirector_salary}
              onValueChange={() =>
                this.setState({
                  modal_newDirector_salary: !this.state.modal_newDirector_salary
                })
              }
            />
            <TextInput
              style={{
                borderBottomColor: "#DDD",
                borderBottomWidth: 1,
                marginHorizontal: 12,
                flex: 1,
                paddingVertical: 5
              }}
              placeholder="Salary"
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingVertical: 4,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                minWidth: 100,
                fontWeight: "bold",
                fontSize: 11,
                color: "#34495e",
                textAlignVertical: "center"
              }}
            >
              ADMIN USER
            </Text>
            <Switch
              value={this.state.modal_newDirector_admin}
              onValueChange={() =>
                this.setState({
                  modal_newDirector_admin: !this.state.modal_newDirector_admin
                })
              }
            />
          </View>
          <TouchableHighlight style={{ marginTop: 30, width: "100%" }}>
            <View
              style={{
                backgroundColor: "#27ae60",
                borderRadius: 6,
                padding: 10,
                alignItems: "center"
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                ADD DIRECTOR
              </Text>
            </View>
          </TouchableHighlight>
        </Modal>
        <ScrollView>
          <View
            style={{
              flex: 0,
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            {/* Add a new Company Heading */}
            <TitleHeader title="Add a new company" headerSize="large" />
            {/* General business details information */}
            <View
              style={{
                flex: 0,
                width: "93%",
                backgroundColor: "white",
                borderRadius: 6,
                padding: 10,
                marginTop: 10
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 4,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    minWidth: 100,
                    fontWeight: "bold",
                    fontSize: 11,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  NAME
                </Text>
                <TextInput placeholder="Company Name" style={{ flex: 1 }} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 4,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    minWidth: 100,
                    fontWeight: "bold",
                    fontSize: 11,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  VAT NUMBER
                </Text>
                <TextInput
                  placeholder="VAT"
                  style={{ flex: 1 }}
                  keyboardType="numeric"
                  maxLength={9}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 4,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    minWidth: 100,
                    fontWeight: "bold",
                    fontSize: 11,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  START of YEAR
                </Text>
                <Text style={{ flex: 1, color: "gray" }}>Select month...</Text>
                <FontAwesome5
                  name="angle-right"
                  size={16}
                  color="rgba(0,0,0,0.4)"
                  style={{ paddingHorizontal: 5 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 4,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    minWidth: 100,
                    fontWeight: "bold",
                    fontSize: 11,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  END of YEAR
                </Text>
                <Text style={{ color: "gray" }}>End month</Text>
              </View>
              <View
                style={{
                  marginVertical: 10,
                  height: 1,
                  width: "100%",
                  backgroundColor: "#34495e"
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 4,
                  alignItems: "flex-start"
                }}
              >
                <Text
                  style={{
                    minWidth: 100,
                    fontWeight: "bold",
                    fontSize: 11,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  ADDRESS
                </Text>
                <TextInput
                  placeholder="Address information"
                  multiline={true}
                  numberOfLines={5}
                  height={90}
                  style={{
                    flex: 1,
                    margin: 0,
                    padding: 0,
                    paddingLeft: 10,
                    borderLeftWidth: 1,
                    borderLeftColor: "#EEE",
                    marginLeft: -10
                  }}
                />
              </View>
              <View
                style={{
                  marginVertical: 10,
                  height: 1,
                  width: "100%",
                  backgroundColor: "#34495e"
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 4,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    minWidth: 100,
                    fontWeight: "bold",
                    fontSize: 11,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  EMAIL
                </Text>
                <TextInput
                  placeholder="Email"
                  style={{ flex: 1 }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 4,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    minWidth: 100,
                    fontWeight: "bold",
                    fontSize: 11,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  PHONE
                </Text>
                <TextInput
                  placeholder="07459 579255"
                  keyboardType="phone-pad"
                  style={{ flex: 1 }}
                />
              </View>
            </View>

            {/* Directors Heading */}
            <TitleHeaderButton
              title="Directors"
              headerSize="small"
              faIcon="plus"
              onButtonPress={this.onAddDirectorPress}
            />
            {/* Directors Structure */}
            <CompaniesStructure />
            {/* Background */}
            <TitleHeader title="Background" headerSize="small" />
            <CompaniesBackground />
            {/* Add company button */}
            <TouchableHighlight
              style={{ marginTop: 50, marginBottom: 10, width: "93%" }}
            >
              <View
                style={{
                  backgroundColor: "#27ae60",
                  borderRadius: 6,
                  padding: 10,
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  ADD COMPANY
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default CompaniesAddScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6
  },
  modal3: {
    height: 300,
    width: 300,
    padding: 10
  }
});

const pickerSelectStyles = EStyleSheet.create({
  inputIOS: {
    color: "black"
  }
});
