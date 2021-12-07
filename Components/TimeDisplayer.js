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
        height: 34,
        width: '50%',
        borderRadius:18,
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        color:'#F5F5F5',
    },
});



