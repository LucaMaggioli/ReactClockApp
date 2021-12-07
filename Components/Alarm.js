import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export default function Alarm({alarm}){

    return (
        <View style={styles.alarmContainer}>
            <Text>{alarm.time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    alarmContainer: {
        borderStyle:"solid",
        borderWidth:2,
        borderRadius:16,
        borderColor:'#000000',
        position:"relative",
        justifyContent: "center",
        alignItems: "center"
    },
    h1:{
        fontSize:26,
    },
});



