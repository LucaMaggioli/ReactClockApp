import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import TimeDisplayer from "./TimeDisplayer";
import AlarmsView from "./AlarmsView";

export default function HomePage(){

    const alarmsJSON = [{'id':'0','time': "08.12"},{'id':'1','time': "09.12"},{'id':'2','time': "10.12"}];

    return (
        <View style={styles.homePageContainer}>
            <View style={styles.titleCont}>
                <Text style={styles.h1}>Hello, From homepage!</Text>
                <TimeDisplayer/>
            </View>
            <AlarmsView style={styles.alarmContainer} alarms={alarmsJSON}/>
        </View>
    );
}

const styles = StyleSheet.create({
    homePageContainer: {
        flex:12,
        backgroundColor: '#efefe0',
        // justifyContent: "space-around",
        alignItems: "center"
    },
    titleCont:{
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
    },
    h1:{
        fontSize:26,
    },
    alarmContainer:{
        // width:'100%',
    },
});



