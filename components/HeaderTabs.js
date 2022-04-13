import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderTabs(props) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 25, width: "100%", alignItems: "center", borderWidth: 0, borderColor: "white", justifyContent: "space-around" }}>
      <HeaderButton text="Home" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
      <HeaderButton text="About us" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
    </View>
  );
}

const HeaderButton = ({ text, setActiveTab, activeTab }) => (
  <TouchableOpacity style={{ borderWidth: 2, borderBottomColor: activeTab === text ? "#E45826" : "black", paddingVertical: 6, alignItems: "center", width: "40%" }} onPress={() => setActiveTab(text)}>
    <Text style={{ color: "#DFDFDE", fontSize: 16, fontWeight: "900" }}>{text}</Text>
  </TouchableOpacity>
);
