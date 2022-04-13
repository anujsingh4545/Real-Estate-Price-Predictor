import { View, Text, ActivityIndicator, TextInput, Alert, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { CheckBox } from "react-native-elements";
import SelectDropdown from "react-native-select-dropdown";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [area, setArea] = useState("");
  const [bhk, setBhk] = useState("0");
  const [bathrooms, setBathrooms] = useState("0");
  const [balcony, setBalcony] = useState("0");
  const [Pchecked, setPChecked] = useState(0);
  const [Fchecked, setFChecked] = useState(0);
  const [states, setStates] = useState("");
  const [loader, setLoader] = useState(false);
  const dropdownRef = useRef({});

  const States = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujrat", "Haryana", "Himachal Pradesh", "Jammu", "Jharkhand", "Karnataka", "Kerela", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttrakhand", "West Bengal"];

  function myFunction() {
    setLoading(false);
  }

  const ExecuteModel = async () => {
    setLoader(true);
    let getState = "";
    let price;

    if (states === States[0]) getState = "Andhra";
    if (states === States[1]) getState = "Arunachal";
    if (states === States[2]) getState = "Assam";
    if (states === States[3]) getState = "Bihar";
    if (states === States[4]) getState = "Chhatisgarh";
    if (states === States[5]) getState = "Goa";
    if (states === States[6]) getState = "Gujrat";
    if (states === States[7]) getState = "Haryana";
    if (states === States[8]) getState = "Himachal";
    if (states === States[9]) getState = "Jammu";
    if (states === States[10]) getState = "Jharkhand";
    if (states === States[11]) getState = "Karnatka";
    if (states === States[12]) getState = "Kerela";
    if (states === States[13]) getState = "Madhya";
    if (states === States[14]) getState = "Maharashtra";
    if (states === States[15]) getState = "Manipur";
    if (states === States[16]) getState = "Meghalaya";
    if (states === States[17]) getState = "Mizoram";
    if (states === States[18]) getState = "Nagaland";
    if (states === States[19]) getState = "Orissa";
    if (states === States[20]) getState = "Punjab";
    if (states === States[21]) getState = "Rajasthan";
    if (states === States[22]) getState = "Sikkim";
    if (states === States[23]) getState = "Tamil";
    if (states === States[24]) getState = "Telangana";
    if (states === States[25]) getState = "Tripura";
    if (states === States[26]) getState = "UttarPardesh";
    if (states === States[27]) getState = "Uttrakhand";
    if (states === States[28]) getState = "Bengal";

    await fetch(`https://real-estate-predictions.herokuapp.com/${getState}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        area: parseInt(area),
        bhk: parseInt(bhk),
        bathroom: parseInt(bathrooms),
        balcony: parseInt(balcony),
        parking: Pchecked,
        furnishing: Fchecked,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        price = responseJson[0];
        setLoader(false);
      })
      .catch(function () {
        setLoader(false);
        price = -1;
      });

    if (price > 0) {
      Alert.alert("Your total cost of flat will be around :  ₹ " + Math.floor(price));
    }
    if (price === -1) {
      Alert.alert("Some error occured , Please try again later ...!");
    }
  };

  function submitcode() {
    if (states === "") {
      Alert.alert("Please select state first ⚠️ ");
    } else if (area === "") {
      Alert.alert("Please fill area details ⚠️ ");
    } else if (bhk === "0") {
      Alert.alert("Please fill bhk details ⚠️ ");
    } else if (bathrooms === "0") {
      Alert.alert("Please fill bathrooms details ⚠️ ");
    } else if (bhk > 6) {
      Alert.alert("BHK values can't be greater than 6 ⚠️ ");
    } else if (bathrooms > 5) {
      Alert.alert("Bathroom value can't be greater than 5 ⚠️ ");
    } else if (balcony > 5) {
      Alert.alert("Balcony value can't be greater than 5 ⚠️ ");
    } else {
      ExecuteModel();
    }
  }

  function decreaseBHK() {
    if (bhk === "0") {
      return;
    }
    setBhk((parseInt(bhk) - 1).toString());
  }
  function increaseBHK() {
    if (bhk === "6" || parseInt(bhk) > 6) {
      return;
    }
    setBhk((parseInt(bhk) + 1).toString());
  }

  function decreasebathroom() {
    if (bathrooms === "0") {
      return;
    }
    setBathrooms((parseInt(bathrooms) - 1).toString());
  }
  function increasebathroom() {
    if (bathrooms === "5" || parseInt(bathrooms) > 5) {
      return;
    }
    setBathrooms((parseInt(bathrooms) + 1).toString());
  }

  function decreasebalcony() {
    if (balcony === "0") {
      return;
    }
    setBalcony((parseInt(balcony) - 1).toString());
  }
  function increasebalcony() {
    if (balcony === "5" || parseInt(balcony) > 5) {
      return;
    }
    setBalcony((parseInt(balcony) + 1).toString());
  }

  function clearcode() {
    dropdownRef.current.reset();
    setStates("");
    setArea("");
    setBhk("0");
    setBathrooms("0");
    setBalcony("0");
    setPChecked(false);
    setFChecked(false);
  }

  useEffect(async () => {
    setTimeout(myFunction, 1000);
  }, []);

  return (
    <View style={{ width: "100%", display: "flex", alignItems: "center", marginTop: 10 }}>
      {loading ? (
        <>
          <View style={{ marginTop: 100 }}>
            <ActivityIndicator size={50} color="#235f94" />
          </View>
        </>
      ) : (
        <View style={{ width: "90%" }}>
          {/*  */}

          {loader && (
            <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }}>
              <ActivityIndicator size={60} color="#ccc" />
            </View>
          )}

          <Text style={{ fontSize: 15, color: "#2e6dd1", fontStyle: "italic", fontWeight: "900", marginTop: 10 }}>* Enter below details to find the approx price of your desired flat ! </Text>

          <SelectDropdown
            defaultButtonText="Select state "
            ref={dropdownRef}
            buttonStyle={{ color: "black", backgroundColor: "black", width: "100%", marginTop: 25, padding: 0, borderBottomWidth: 1, borderColor: "#D06224", borderRadius: 20, borderLeftWidth: 1, borderRightWidth: 1 }}
            buttonTextStyle={{ fontWeight: "600", letterSpacing: 1, color: "#bdb9b1", fontSize: 20 }}
            data={States}
            onSelect={(selectedItem, index) => {
              setStates(selectedItem);
            }}
          />

          <View style={{ marginTop: 30, display: "flex", alignItems: "center", flexDirection: "row", width: "100%", alignSelf: "center" }}>
            <Text style={{ fontSize: 17, letterSpacing: 1, color: "#D06224", fontWeight: "bold", width: "40%" }}>Area in sq.ft </Text>
            <TextInput
              value={area}
              onChangeText={(val) => {
                setArea(val);
              }}
              keyboardType="numeric"
              style={{ color: "#bdbdb9", flex: 1, borderWidth: 0.5, borderBottomColor: "#bdbdb9", fontSize: 13, borderRadius: 4, paddingHorizontal: 10 }}
            ></TextInput>
          </View>

          <View style={{ marginTop: 25, display: "flex", alignItems: "center", flexDirection: "row", width: "100%", alignSelf: "center" }}>
            <Text style={{ fontSize: 17, letterSpacing: 1, color: "#D06224", fontWeight: "bold", width: "40%" }}>BHK </Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "60%", justifyContent: "space-between", borderWidth: 0.5, borderBottomColor: "#bdbdb9", paddingVertical: 3, borderRadius: 4 }}>
              {/*  */}

              <TouchableOpacity onPress={decreaseBHK}>
                <Text style={{ padding: 3, color: "#fff", paddingHorizontal: 10 }}>➖</Text>
              </TouchableOpacity>
              <TextInput
                value={bhk}
                onChangeText={(val) => {
                  setBhk(val);
                }}
                keyboardType="numeric"
                style={{ color: "#bdbdb9", fontSize: 13, flex: 1, textAlign: "center", borderRadius: 4, paddingHorizontal: 10 }}
              ></TextInput>
              <TouchableOpacity onPress={increaseBHK}>
                <Text style={{ padding: 3, color: "#fff", paddingHorizontal: 10 }}>➕ </Text>
              </TouchableOpacity>

              {/*  */}
            </View>
          </View>

          <View style={{ marginTop: 25, display: "flex", alignItems: "center", flexDirection: "row", width: "100%", alignSelf: "center" }}>
            <Text style={{ fontSize: 17, letterSpacing: 1, color: "#D06224", fontWeight: "bold", width: "40%" }}>Bathrooms </Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "60%", justifyContent: "space-between", borderWidth: 0.5, borderBottomColor: "#bdbdb9", paddingVertical: 3, borderRadius: 4 }}>
              {/*  */}

              <TouchableOpacity onPress={decreasebathroom}>
                <Text style={{ padding: 3, color: "#fff", paddingHorizontal: 10 }}>➖</Text>
              </TouchableOpacity>
              <TextInput
                value={bathrooms}
                onChangeText={(val) => {
                  setBathrooms(val);
                }}
                keyboardType="numeric"
                style={{ color: "#bdbdb9", fontSize: 13, flex: 1, textAlign: "center", borderRadius: 4, paddingHorizontal: 10 }}
              ></TextInput>
              <TouchableOpacity onPress={increasebathroom}>
                <Text style={{ padding: 3, color: "#fff", paddingHorizontal: 10 }}>➕ </Text>
              </TouchableOpacity>

              {/*  */}
            </View>
          </View>

          <View style={{ marginTop: 25, display: "flex", alignItems: "center", flexDirection: "row", width: "100%", alignSelf: "center" }}>
            <Text style={{ fontSize: 17, letterSpacing: 1, color: "#D06224", fontWeight: "bold", width: "40%" }}>Balcony </Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "60%", justifyContent: "space-between", borderWidth: 0.5, borderBottomColor: "#bdbdb9", paddingVertical: 3, borderRadius: 4 }}>
              {/*  */}

              <TouchableOpacity onPress={decreasebalcony}>
                <Text style={{ padding: 3, color: "#fff", paddingHorizontal: 10 }}>➖</Text>
              </TouchableOpacity>
              <TextInput
                value={balcony}
                onChangeText={(val) => {
                  setBalcony(val);
                }}
                keyboardType="numeric"
                style={{ color: "#bdbdb9", fontSize: 13, flex: 1, textAlign: "center", borderRadius: 4, paddingHorizontal: 10 }}
              ></TextInput>
              <TouchableOpacity onPress={increasebalcony}>
                <Text style={{ padding: 3, color: "#fff", paddingHorizontal: 10 }}>➕ </Text>
              </TouchableOpacity>

              {/*  */}
            </View>
          </View>

          <View style={{ marginTop: 35, display: "flex", alignItems: "center", flexDirection: "row", width: "100%", alignSelf: "center", justifyContent: "space-between" }}>
            {/*  */}
            <View style={{ width: "45%", display: "flex", alignItems: "center", flexDirection: "row", borderWidth: 0, borderColor: "white" }}>
              <Text style={{ fontSize: 17, letterSpacing: 1, color: "#D06224", fontWeight: "bold", flex: 1, marginBottom: 3 }}>Parking</Text>
              <CheckBox activeOpacity={0.8} checked={Pchecked} onPress={() => setPChecked(!Pchecked)} containerStyle={{ padding: 0, margin: 0 }} />
            </View>

            <View style={{ width: "45%", display: "flex", alignItems: "center", flexDirection: "row", borderWidth: 0, borderColor: "white" }}>
              <Text style={{ fontSize: 17, letterSpacing: 1, color: "#D06224", fontWeight: "bold", flex: 1, marginBottom: 0 }}>Furnishing</Text>
              <CheckBox activeOpacity={0.8} checked={Fchecked} onPress={() => setFChecked(!Fchecked)} containerStyle={{ padding: 0, margin: 0 }} />
            </View>
          </View>

          {/* Buttons submit and cancel to make things work */}

          <View style={{ marginTop: 40, display: "flex", alignItems: "center", flexDirection: "row", width: "100%", borderWidth: 0, borderColor: "white", justifyContent: "space-around" }}>
            <Text onPress={submitcode} style={{ marginRight: 6, flex: 1, backgroundColor: "#DFDFDE", textAlign: "center", borderRadius: 10, paddingVertical: 10, fontWeight: "bold", letterSpacing: 1, fontSize: 14 }}>
              Submit
            </Text>
            <Text onPress={clearcode} style={{ marginLeft: 6, flex: 1, backgroundColor: "#DFDFDE", textAlign: "center", borderRadius: 10, paddingVertical: 10, fontWeight: "bold", letterSpacing: 1, fontSize: 14, color: "black" }}>
              Clear
            </Text>
          </View>

          {/*  */}
        </View>
      )}
    </View>
  );
}
