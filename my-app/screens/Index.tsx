import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {MapPin,CaretDown,Bell} from "phosphor-react-native"
import Sun from '../../assets 01d.svg';
export default function Home() {
  return (
    <LinearGradient colors={["#0B42AB","#134CB5","#08244F"]} 
    style={styles.container}>
    
    
    <View style={styles.content}>
        <View style={styles.header}>
            <View style={styles.headerLeft}>
            <MapPin color='#fff' size={27} />
            <Text style={styles.headerLeftText}>Arapiraca</Text>
            <CaretDown color='#fff' size={27} />
            </View> 
            <Bell size={29} />
        </View>
        <View style={styles.info} >
          

        </View>
    </View>
    </LinearGradient>
  );
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    content:  { paddingHorizontal: 41,
                paddingTop: 44,  
    },
    header:   {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",


    }, 
    headerLeft: {
      flexDirection:"row",
      alignItems: "center",
      gap: 10,
    },

    headerLeftText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
    }
  });