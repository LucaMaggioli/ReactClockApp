import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Dimensions} from 'react-native';
import HomePage from "./Components/Home-page";
import NavBar from "./Components/NavBar";
import {useOrientation} from "./Hooks/useOrientation";


export default function App() {
  const orientation = useOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <NavBar/>
      <HomePage/>
      <Text style={styles.orientation}>{orientation}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  orientation:{
      flex:1,
      backgroundColor: '#343ff3',
  }
});


// <StatusBar style="auto" />
// backgroundColor: '#fff',
//     flex: 1,
// justifyContent: 'center',
// alignItems: 'center',

