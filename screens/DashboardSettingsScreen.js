import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import TitleHeader from "../components/TitleHeader";

class DashboardSettingsScreen extends Component {
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
            {/* Settings Title */}
            <TitleHeader title="Settings" headerSize="large" />
            {/* Settings - User Info */}
            <View
              style={{
                borderRadius: 6,
                backgroundColor: "white",
                padding: 10,
                width: "93%",
                marginTop: 10
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
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
                  NAME
                </Text>
                <TextInput style={{ flex: 1 }} value="Dave Van De Velde" />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
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
                <TextInput style={{ flex: 1 }} value="jeirman@gmail.com" />
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
                  flex: 1,
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
                  PASSWORD
                </Text>
                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Enter new password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  paddingVertical: 4,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    minWidth: 100,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 12,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                />
                <TextInput
                  style={{ flex: 1 }}
                  placeholder="Confirm new password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  paddingVertical: 4,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    minWidth: 100,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 12,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                />
                <TouchableOpacity>
                  <View
                    style={{
                      padding: 10,
                      flex: 1,
                      backgroundColor: "#2ecc71",
                      borderRadius: 6,
                      alignItems: "center"
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      CHANGE PASSWORD
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  marginVertical: 10,
                  height: 1,
                  backgroundColor: "#34495e"
                }}
              />
              <TouchableOpacity>
                <View
                  style={{
                    padding: 10,
                    flex: 1,
                    backgroundColor: "#e74c3c",
                    borderRadius: 6,
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    SIGN OUT
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Settings - Download Info */}
            <View
              style={{
                borderRadius: 6,
                backgroundColor: "white",
                padding: 10,
                width: "93%",
                marginTop: 10
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
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
                  TAX RANGES
                </Text>
                <Text style={{ flex: 1 }}>Up to £11,850</Text>
                <Text>0 %</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
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
                />
                <Text style={{ flex: 1 }}>£11,851 to £46,350</Text>
                <Text>20 %</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
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
                />
                <Text style={{ flex: 1 }}>£46,351 to £150,000</Text>
                <Text>40 %</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
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
                />
                <Text style={{ flex: 1 }}>Over £150,000</Text>
                <Text>45 %</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
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
                  CUT OFF
                </Text>
                <Text>6 April 2017 > 5 April 2018</Text>
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
                  flex: 1,
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
                  UPDATED
                </Text>
                <Text style={{ flex: 1 }}>Wed 29 Aug 2018 @ 16:04</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  paddingVertical: 4,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    minWidth: 100,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 12,
                    color: "#34495e",
                    textAlignVertical: "center"
                  }}
                />
                <TouchableOpacity>
                  <View
                    style={{
                      padding: 10,
                      flex: 1,
                      backgroundColor: "#2ecc71",
                      borderRadius: 6,
                      alignItems: "center"
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      REFRESH FROM SERVER
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Settings - App Info */}
            <View
              style={{
                borderRadius: 6,
                backgroundColor: "white",
                padding: 10,
                width: "93%",
                marginTop: 10,
                marginBottom: 10
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
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
                  VERSION
                </Text>
                <Text>0.0.1 (August 2018)</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
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
                />
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <View
                      style={{
                        flex: 1,
                        height: 100,
                        marginRight: 5,
                        borderRadius: 6,
                        backgroundColor: "#22d0b4",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 4
                      }}
                    >
                      <Image
                        source={require("../assets/prodAgreement.png")}
                        resizeMode="cover"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <View
                      style={{
                        flex: 1,
                        height: 100,
                        marginLeft: 5,
                        borderRadius: 6,
                        backgroundColor: "#e7dfd9",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 4
                      }}
                    >
                      <Image
                        source={require("../assets/prodTour.png")}
                        resizeMode="cover"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default DashboardSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
