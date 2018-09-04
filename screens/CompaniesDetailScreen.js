import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import BackButton from "../components/BackButton";
import TitleHeader from "../components/TitleHeader";

import DashboardChart from "../components/DashboardChart";
import CompaniesStructure from "../components/CompaniesStructure";

class CompaniesDetailScreen extends Component {
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
            {/* Companies Heading */}
            <TitleHeader
              title="SpaceX"
              headerSize="large"
              faIcon="pencil-alt"
              navScreen="CompaniesEdit"
              navigation={this.props.navigation}
            />

            {/* Overview Chart */}
            <DashboardChart />

            {/* Balance Sheet Heading */}
            <TitleHeader title="Balance Sheet" headerSize="small" />
            {/* Balance Sheet Details */}
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                width: "93%",
                flex: 0,
                marginVertical: 5,
                padding: 8,
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 10,
                    alignItems: "center"
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        paddingLeft: 4
                      }}
                    >
                      July 2018
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "flex-end",
                      flexDirection: "row"
                    }}
                  >
                    <TouchableOpacity>
                      <View
                        style={{
                          paddingVertical: 4,
                          paddingHorizontal: 8,
                          borderRadius: 4,
                          backgroundColor: "#27ae60",
                          marginRight: 6
                        }}
                      >
                        <Text style={{ fontSize: 11, color: "white" }}>
                          Month
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View
                        style={{
                          paddingVertical: 4,
                          paddingHorizontal: 8,
                          borderRadius: 4,
                          backgroundColor: "#7f8c8d"
                        }}
                      >
                        <Text style={{ fontSize: 11, color: "white" }}>
                          Year
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 4 }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 11,
                        color: "#34495e",
                        paddingLeft: 4
                      }}
                    >
                      INCOME
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12 }}>£ 125,000.00</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 11,
                        color: "#34495e"
                      }}
                    >
                      EXPENSES
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        textAlign: "right",
                        paddingRight: 4
                      }}
                    >
                      £ 43,999.05
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 4 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 11 }} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 11 }} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 11,
                        color: "#34495e"
                      }}
                    >
                      SALARIES
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        textAlign: "right",
                        paddingRight: 4
                      }}
                    >
                      £ 781.00
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 4 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 11 }} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 11 }} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 11,
                        color: "#34495e"
                      }}
                    >
                      GROSS
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        textAlign: "right",
                        paddingRight: 4
                      }}
                    >
                      £ 81,000.95
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 11,
                        color: "#34495e",
                        paddingLeft: 4
                      }}
                    >
                      TAXES
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12 }}>£ 15,390.18</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 11,
                        color: "#34495e"
                      }}
                    >
                      NET
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        textAlign: "right",
                        paddingRight: 4
                      }}
                    >
                      £ 65,610.77
                    </Text>
                  </View>
                </View>

                {/* Big green button to add (new) income and expenses */}
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("CompaniesEnterNumbers");
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "#27ae60",
                      marginTop: 12,
                      padding: 8,
                      alignItems: "center",
                      borderRadius: 6
                    }}
                  >
                    <Text style={{ color: "white" }}>Add new numbers</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Corporate Tax Heading */}
            <TitleHeader title="Corporate Taxes" headerSize="small" />
            {/* Corporate Tax Details */}
            <View style={styles.bodyContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  borderBottomColor: "#666",
                  borderBottomWidth: 1,
                  padding: 4
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    textAlign: "left"
                  }}
                />
                <Text style={{ flex: 1, textAlign: "left" }}>Amount</Text>
                <Text style={{ flex: 1, textAlign: "right" }}>Due</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  padding: 4
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    textAlign: "left"
                  }}
                >
                  2017/2018
                </Text>
                <Text style={{ flex: 1, textAlign: "left" }}>£ 52,811.00</Text>
                <Text style={{ flex: 1, textAlign: "right" }}>25/04/2019</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  padding: 4
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    textAlign: "left"
                  }}
                >
                  2018/2019
                </Text>
                <Text style={{ flex: 1, textAlign: "left" }}>£ 8,723.00</Text>
                <Text style={{ flex: 1, textAlign: "right" }}>26/04/2020</Text>
              </View>
            </View>

            {/* Dividends Heading */}
            <TitleHeader
              title="Dividends"
              headerSize="small"
              faIcon="eye"
              navScreen="CompaniesAdd"
              navigation={this.props.navigation}
            />
            {/* Dividend Details */}
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                width: "93%",
                flex: 0,
                marginVertical: 5,
                padding: 8,
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 10,
                    alignItems: "center"
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        paddingLeft: 4
                      }}
                    >
                      Last 5
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "flex-end",
                      flexDirection: "row"
                    }}
                  >
                    <TouchableOpacity>
                      <View
                        style={{
                          paddingVertical: 4,
                          paddingHorizontal: 8,
                          borderRadius: 4,
                          backgroundColor: "#27ae60",
                          marginRight: 6
                        }}
                      >
                        <Text style={{ fontSize: 11, color: "white" }}>
                          Last 5
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View
                        style={{
                          paddingVertical: 4,
                          paddingHorizontal: 8,
                          borderRadius: 4,
                          backgroundColor: "#7f8c8d"
                        }}
                      >
                        <Text style={{ fontSize: 11, color: "white" }}>
                          Year
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flexDirection: "row", marginBottom: 4 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, paddingLeft: 4 }}>
                      30/07/2018
                    </Text>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 12 }}>Dividend July</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        textAlign: "right",
                        paddingRight: 4
                      }}
                    >
                      £ 3,000.00
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 4 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, paddingLeft: 4 }}>
                      30/06/2018
                    </Text>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 12 }}>Dividend June</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        textAlign: "right",
                        paddingRight: 4
                      }}
                    >
                      £ 3,000.00
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 4 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, paddingLeft: 4 }}>
                      15/06/2018
                    </Text>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 12 }}>Extra dividend</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        textAlign: "right",
                        paddingRight: 4
                      }}
                    >
                      £ 5,500.00
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 4 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, paddingLeft: 4 }}>
                      30/05/2018
                    </Text>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 12 }}>Dividend May</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        textAlign: "right",
                        paddingRight: 4
                      }}
                    >
                      £ 3,000.00
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", marginBottom: 4 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12, paddingLeft: 4 }}>
                      30/04/2018
                    </Text>
                  </View>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontSize: 12 }}>Dividend April</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 12,
                        textAlign: "right",
                        paddingRight: 4
                      }}
                    >
                      £ 3,000.00
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Structure Heading */}
            <TitleHeader
              title="Company Structure"
              headerSize="small"
              faIcon="pencil-alt"
              navScreen="CompaniesAdd"
              navigation={this.props.navigation}
            />
            {/* Structure List */}
            <CompaniesStructure />

            {/* Business Details Heading */}
            <TitleHeader title="Business Details" headerSize="small" />
            {/* Business Details */}
            <View
              style={{
                flex: 0,
                width: "93%",
                backgroundColor: "white",
                borderRadius: 6,
                padding: 10,
                marginTop: 10,
                marginBottom: 20
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
                    fontSize: 12,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  VAT NUMBER
                </Text>
                <Text>123456789</Text>
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
                    fontSize: 12,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  START YEAR
                </Text>
                <Text>March</Text>
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
                    fontSize: 12,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  END YEAR
                </Text>
                <Text style={{ color: "gray" }}>February</Text>
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
                    fontSize: 12,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  ADDRESS
                </Text>
                <Text>
                  {`Flat 602 Zephyr Court\n5 Barnard Square\nIP2 8FH\nIpswich`}
                </Text>
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
                    fontSize: 12,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  EMAIL
                </Text>
                <Text>elon.musk@spacex.com</Text>
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
                    fontSize: 12,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                >
                  PHONE
                </Text>
                <Text>07459 579255</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default CompaniesDetailScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bodyContainer: {
    backgroundColor: "white",
    borderRadius: 6,
    width: "93%",
    flex: 0,
    marginVertical: 5,
    padding: 10
  }
});
