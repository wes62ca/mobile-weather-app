import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MapPin, CaretDown, Bell } from "phosphor-react-native";
import RainSvg from "../../my-app/assets/rain.svg";

export default function Home() {
  return (
    <LinearGradient
      colors={["#0B42AB", "#134CB5", "#08244F"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <MapPin color="#FFF" size={27} />
            <Text style={styles.headerLeftText}>Arapiraca</Text>
            <CaretDown color="#FFF" size={27} />
          </View>
          <Bell color="#FFF" size={29} />
        </View>
        <View style={styles.info}>
        <RainSvg   width={284} height={207}
         style={{
          left: 19,
          top: 35,
        }}
        />
          <Text style={[styles.infoText, { marginBottom: 10 }]}>24°C</Text>
          <Text style={styles.infoTextMaxMin}>Max.: 31º  Min.: 25º</Text>
        </View>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: { 
    paddingHorizontal: 41,
    paddingTop: 44, 
    alignItems: "center",
    justifyContent: 'center',
   },


  
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  headerLeftText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  infoText: {
    fontSize: 64,
    fontWeight: 600,
    color: "#FFFFFF",

  },

  info:{
    paddingVertical: 70,
    alignItems: "center",
    gap:6,

  },

  infoTextMaxMin:{
    fontSize: 18,
    fontWeight: 400,
    color:"#FFFFFF"


  },

});
