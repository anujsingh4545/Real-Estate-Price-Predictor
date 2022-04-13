import { View, Text, ActivityIndicator, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function About() {
  const [loading, setLoading] = useState(true);

  function myFunction() {
    setLoading(false);
  }

  useEffect(async () => {
    setTimeout(myFunction, 1000);
  }, []);
  return (
    <View style={{ width: "100%", display: "flex", alignItems: "center", marginVertical: 10, borderWidth: 0, borderColor: "white" }}>
      {loading ? (
        <>
          <View style={{ marginTop: 100 }}>
            <ActivityIndicator size={50} color="#235f94" />
          </View>
        </>
      ) : (
        <View style={{ borderWidth: 0, borderColor: "white", width: "95%" }}>
          {/*  */}
          <Image source={require("../assets/about.jpg")} style={{ width: "100%", height: 150, marginBottom: 10 }} />
          <Text style={{ color: "#e8eaed", fontSize: 13, marginHorizontal: 5, marginVertical: 10, letterSpacing: 0.3 }}>
            Real Estate Price Predictor is an app that deals with basic aspect of the consumers’ needs in the real estate industry. It is a platform where buyers can get the information about real estate properties all over the India quickly, effectively and inexpensively. This app is designed specially for predicting the average price of flats across the various states.{"\n\n"}
            Including certain features like Area in square ft, BHK, Bathroom, Balcony, Parking we aim to achieve our goal of predicting the approximate price of the flat that the user wants to know. {"\n\n"}
            By reducing the user’s efforts to search and filter the results from various online websites we give the speedy results to our customer that will make our application popular among the masses.{"\n \n\n"}
            Please for any query or error email us at :-
          </Text>

          {/*  */}

          <View style={{ marginTop: 20 }}>
            <MailDevlopers user="anujsinghsisodiya5341@gmail.com" />
            <MailDevlopers user="dhillonharjit61@gmail.com" />
            <MailDevlopers user="shreya2002sunair@gmail.com" />
            <MailDevlopers user="kailashdewangan1608@gmail.com" />
          </View>

          {/*  */}
        </View>
      )}
    </View>
  );
}

const MailDevlopers = ({ user }) => (
  <View style={{ display: "flex", alignItems: "center", flexDirection: "row", marginVertical: 3, marginHorizontal: 5 }}>
    {/*  */}

    <View style={{ padding: 6, borderRadius: 100, backgroundColor: "#CC561E" }}>
      <Fontisto name="email" size={13} style={{ color: "white", fontWeight: "bold" }} />
    </View>
    <Text style={{ color: "#e8eaed", fontSize: 13, letterSpacing: 0.5, fontWeight: "bold", fontStyle: "italic", marginLeft: 10 }}>{user}</Text>

    {/*  */}
  </View>
);
