import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {useCurrentTime} from "../Hooks/useCurrentTime";

export default function TimeDisplayer(){

    const currentTime = useCurrentTime();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{currentTime}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A2BD84',
        // height: 38,
        height: 152,
        width: 152,
        // borderRadius:20,
        borderRadius:152/2,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        color:'#F5F5F5',
        fontSize:24,
    },
});



