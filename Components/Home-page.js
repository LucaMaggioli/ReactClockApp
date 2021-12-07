import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import TimeDisplayer from "./TimeDisplayer";
import AlarmsView from "./AlarmsView";

export default function HomePage(){

    const alarmsJSON = [{'id':'0','time': "08.12"},{'id':'1','time': "09.12"},{'id':'2','time': "10.12"}];

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Hello, From homepagee!</Text>
            <TimeDisplayer/>
            <AlarmsView alarms={alarmsJSON}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
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



