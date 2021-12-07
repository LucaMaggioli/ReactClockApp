import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export default function NavBar(){

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Clock Time!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#304545',
        paddingTop:'10%',
        height:'10%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        color: '#fefefe'
    },
});
