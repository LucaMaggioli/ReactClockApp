import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import TimeDisplayer from "./TimeDisplayer";

export default function HomePage(){

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Hello, From homepagee!</Text>
            <TimeDisplayer/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefe0',
        height:'90%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    h1:{
        fontSize:26,
    },
});



