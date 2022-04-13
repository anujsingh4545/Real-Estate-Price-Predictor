import { View, Text, Image, ScrollView } from "react-native";
import { useState } from "react";
import HeaderTabs from "./components/HeaderTabs";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ marginTop: "6%", borderWidth: 0, borderColor: "white", display: "flex", alignItems: "center", paddingVertical: 10, paddingHorizontal: 5, justifyContent: "center" }}>
        <Image source={require("./assets/image.jpg")} style={{ height: 80, width: "95%", alignItems: "center", borderWidth: 0, borderColor: "white" }}></Image>
      </View>

      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Home" ? (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
          <Home />
        </ScrollView>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
          <About />
        </ScrollView>
      )}
    </View>
  );
}
