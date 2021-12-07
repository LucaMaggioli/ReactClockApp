import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export default function NavBar(){

    return (
        <View style={styles.container}>
            <View style={styles.spacer}></View>
            <Text style={styles.text}>Clock Time!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // display:"flex",
        flex:2,
        // display:"flex",
        flexDirection:"column",
        backgroundColor: '#304545',
        // height:'10%',
        // width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        flex:1,
        color: '#fefefe'
    },
    spacer:{
        flex:1,
    }
});
